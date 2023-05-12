import React, { useState } from "react";
import EditorMenuBar from "./EditorMenuBar";
import { Editor, EditorContent } from "@tiptap/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

type Props = {
  contentErr: string;
  isEditable: boolean;
  setContent: (content: string) => void;
  editor: Editor | null;
  title: string;
};

const Article = ({
  contentErr,
  isEditable,
  setContent,
  editor,
  title,
}: Props) => {
  const [role, setRole] = useState<string>("I am a helpful assistant.");

  if (!editor) {
    return null;
  }

  const postAiContent = async () => {
    editor
      .chain()
      .focus()
      .setContent("Generating Ai Content. Please Wait...")
      .run();

    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/ai`;
    const requestBody = { title: title, role: role };
    const headers = { "Content-Type": "application/json" };
    let delay = 1000;
    let retryCount = 0;
    let response = null;

    while (response === null) {
      try {
        response = await fetch(apiUrl, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(requestBody),
        });
        const data = await response.json();
        editor.chain().focus().setContent(data.content).run();
        setContent(data.content);
      } catch (error: any) {
        if (error.response.status === 429) {
          console.log(
            `Request limit reached. Retrying in ${delay / 1000} seconds...`
          );
          retryCount += 1;
          await new Promise((resolve) => setTimeout(resolve, delay));
          delay *= 2;
          if (retryCount > 5) {
            console.log(`Maximum retries reached. Aborting...`);
            break;
          }
        } else {
          console.error("request error", error);
          break;
        }
      }
    }
  };

  return (
    <article className="text-wh-500 leading-8">
      {isEditable && (
        <div className="border-2 rounded-md bg-wh-50 p-3 mb-3">
          <h4 className="m-0 p-0">Generate AI Content</h4>
          <p className="my-1 p-0 text-xs">What type of writer do you want?</p>
          <div className="flex justify-between gap-5">
            <input
              className="border-2 rounded-md bg-wh-50 px-3 py-1 w-full"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
            <button type="button" onClick={postAiContent}>
              <RocketLaunchIcon className="h-8 w-8 text-accent-orange hover:text-wh-300" />
            </button>
          </div>
        </div>
      )}
      <div
        className={
          isEditable ? "border-2 rounded-md bg-wh-50 p-3" : "w-full max-w-full"
        }
      >
        {isEditable && (
          <>
            <EditorMenuBar editor={editor} />
            <hr className="border-1 mt-2 mb-5" />
          </>
        )}
        <EditorContent editor={editor} />
      </div>
      {contentErr && <p className="mt-1 text-wh-900">{contentErr}</p>}
    </article>
  );
};

export default Article;
