import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const RichTextEditor = () => {
    const [editorContent, setEditorContent] = useState('');

    const handleEditorChange = (content: string) => {
        setEditorContent(content);
    };

    return (
        <div>
            <h2>Rich Text Editor</h2>
            <Editor
                apiKey="ay0q0kysqri0f5kma2h1r8dnjbxkbegpzkadnhymgki9wclf"
                value={editorContent}
                onEditorChange={(content) => handleEditorChange(content)}
                init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                }}
            />
            <div>
                <h3>Editor Output:</h3>
                <div dangerouslySetInnerHTML={{ __html: editorContent }} />
            </div>
        </div>
    );
};

export default RichTextEditor;
