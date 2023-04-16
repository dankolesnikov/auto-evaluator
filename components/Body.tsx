import React, { useMemo, useState } from "react";
import {
  Group,
  Text,
  useMantineTheme,
  rem,
  Alert,
  Table,
  Button,
  Timeline,
  Title,
} from "@mantine/core";
import {
  IconUpload,
  IconPhoto,
  IconX,
  IconAlertCircle,
} from "@tabler/icons-react";
import { Dropzone, MS_WORD_MIME_TYPE, PDF_MIME_TYPE } from "@mantine/dropzone";
import { Form } from "../utils/types";
import { notifications } from "@mantine/notifications";
import { API_URL, TEXT_PLAIN } from "../utils/variables";
import { isEmpty, isNil } from "lodash";

enum ResponseStatus {
  WIP = "WIP",
  DONE = "DONE",
}

enum ResponseType {
  Message = "message",
  Table = "table",
}

type TableA = {
  question: string;
  answer: string;
  result: string;
  score: string;
  latency: string;
};

type Response = {
  type: ResponseType;
  status: ResponseStatus;
  data: string | TableA[];
};

const Body = ({ form }: { form: Form }) => {
  const { setValue, watch, getValues, handleSubmit } = form;
  const watchFiles = watch("files");
  const theme = useMantineTheme();
  const [output, setOutput] = useState([] as Response[]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const tableAData = useMemo(
    () =>
      !isEmpty(output) &&
      (output.filter((item) => item.type === "table")?.[0]?.data as TableA[]),
    [output]
  );

  const submit = handleSubmit(async (data) => {
    setLoading(true);
    setOutput(null);
    const formData = new FormData();
    data.files.forEach((file) => {
      formData.append("files", file);
    });
    formData.append("num_eval_questions", data.evalQuestionsCount.toString());
    formData.append("chunk_chars", data.chunkSize.toString());
    formData.append("overlap", data.overlap.toString());
    formData.append("split_method", data.splitMethod);
    formData.append("retriver_type", data.retriever);
    formData.append("embeddings", data.embeddingAlgorithm);
    formData.append("model", data.model);

    try {
      const response = await fetch(API_URL + "/evaluator-stream", {
        method: "POST",
        body: formData,
      });
      const reader = response.body.getReader();

      let done, value;
      while (!done) {
        ({ value, done } = await reader.read());
        const decoder = new TextDecoder();
        if (done) {
          setIsSuccess(true);
          break;
        }
        try {
          console.log("decoder.decode(value)", decoder.decode(value));
          setOutput((state) => [
            ...(state ?? []),
            JSON.parse(decoder.decode(value)),
          ]);
        } catch (e) {
          console.log("decoder.decode(value)", decoder.decode(value));
          console.log(e);
          notifications.show({
            title: "Error",
            message: "Error parsing API response",
            color: "red",
          });
          break;
        }
      }
    } catch (e) {
      notifications.show({
        title: "Error",
        message: "API Error",
        color: "red",
      });
    } finally {
      setLoading(false);
    }
  });

  return (
    <>
      <Alert
        icon={<IconAlertCircle size="1rem" />}
        title="Instructions"
        color="teal"
      >
        Provide your PDFs, TXT, Docx files.
      </Alert>
      <br />
      <Dropzone
        loading={loading}
        onDrop={(files) => {
          setIsSuccess(false);
          setValue("files", [...(getValues("files") ?? []), ...files]);
        }}
        onReject={(files) =>
          notifications.show({
            title: "Error",
            message: `File type(s) not supported ${files.map(
              (file) => file.file.type
            )}`,
            color: "red",
          })
        }
        maxSize={3 * 1024 ** 2}
        accept={TEXT_PLAIN && PDF_MIME_TYPE && MS_WORD_MIME_TYPE}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: rem(125), pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              size="3.2rem"
              stroke={1.5}
              color={
                theme.colors[theme.primaryColor][
                  theme.colorScheme === "dark" ? 4 : 6
                ]
              }
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size="3.2rem"
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size="3.2rem" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag and Drop PDFs, Docx, TXT
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      {!!watchFiles?.length && (
        <>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              {watchFiles?.map((file, id) => (
                <tr key={id}>
                  <td>{file.name}</td>
                  <td>{file.size}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {(isSuccess || !loading) && (
            <Button
              style={{ marginBottom: "18px" }}
              type="submit"
              onClick={submit}
            >
              Submit
            </Button>
          )}
        </>
      )}
      {!isEmpty(output) && (
        <>
          <br />
          <Timeline
            color="dark"
            bulletSize={18}
            lineWidth={2}
            active={output?.length ?? 0}
          >
            <Timeline.Item
              active={!isNil(output?.[0])}
              title="Initializing evaluator"
            />
            <Timeline.Item
              active={!isNil(output?.[1])}
              title="Files Accepted"
            />
            <Timeline.Item
              active={!isNil(output?.[2])}
              title="Splitting Texts"
            />
            <Timeline.Item
              active={!isNil(output?.[3])}
              title="Making retriever"
            />
            <Timeline.Item active={!isNil(output?.[4])} title="Grading Model" />
            <Timeline.Item
              active={!isNil(output?.[5])}
              title="Generating Results"
            />
          </Timeline>
          {!isEmpty(tableAData) && (
            <>
              <br />
              <Title order={3}>Results</Title>
              <Table>
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Result</th>
                    <th>Score</th>
                    <th>Latency</th>
                  </tr>
                </thead>
                <tbody>
                  {tableAData?.map((response, index) => (
                    <tr key={index}>
                      <td>{response.question}</td>
                      <td>{response.answer}</td>
                      <td>{response.result}</td>
                      <td>{response.score}</td>
                      <td>{response.latency}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </>
      )}
    </>
  );
};
export default Body;
