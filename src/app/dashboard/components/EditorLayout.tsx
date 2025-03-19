import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('./RichTextEditor'), {
    ssr: false,
});

const EditorLayout = () => (
    <div>
        <RichTextEditor />
    </div>
);

export default EditorLayout;