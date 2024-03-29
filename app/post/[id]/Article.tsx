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

    const res = await fetch(`/api/openai`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, role: role }),
    });
    const data = await res.json();
    editor.chain().focus().setContent(data.content).run();
    setContent(data.content);
  };

  return (
    <article className="text-wh-50 leading-8">
      {isEditable && (
        <div className="border-2 rounded-md bg-wh-100 p-3 mb-3">
          <h4 className="m-0 p-0">Generate AI Content</h4>
          <p className="my-1 p-0 text-xs text-wh-700">
            What type of writer do you want?
          </p>
          <div className="flex justify-between gap-5">
            <input
              className="border-2 rounded-md bg-wh-50 text-wh-500 px-3 py-1 w-full"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
            <button type="button" onClick={postAiContent}>
              <RocketLaunchIcon className="h-8 w-8 text-accent-blue hover:text-accent-red" />
            </button>
          </div>
        </div>
      )}
      <div
        className={
          isEditable
            ? "border-2 rounded-md bg-wh-100 p-3"
            : "w-full max-w-full mb-10 bg-wh-50 rounded-md p-3"
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
      {contentErr && <p className="mt-1 text-wh-50">{contentErr}</p>}
    </article>
  );
};

export default Article;
