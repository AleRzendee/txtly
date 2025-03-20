import { Editor } from "@tinymce/tinymce-react";

const RichTextEditor = () => {
    return (
        <Editor
            apiKey="ay0q0kysqri0f5kma2h1r8dnjbxkbegpzkadnhymgki9wclf"
            init={{
                plugins: "searchreplace visualblocks code fullscreen",
                toolbar:
                    "undo redo | styleselect | bold italic | alignleft aligncenter alignright | code fullscreen",
                external_plugins: {
                    searchreplace: "https://cdn.tiny.cloud/1/no-api-key/tinymce/6/plugins/searchreplace/plugin.min.js",
                    visualblocks: "https://cdn.tiny.cloud/1/no-api-key/tinymce/6/plugins/visualblocks/plugin.min.js",
                    code: "https://cdn.tiny.cloud/1/no-api-key/tinymce/6/plugins/code/plugin.min.js",
                    fullscreen: "https://cdn.tiny.cloud/1/no-api-key/tinymce/6/plugins/fullscreen/plugin.min.js",
                },
            }}
        />
    );
};

export default RichTextEditor;
