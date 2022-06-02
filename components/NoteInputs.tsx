import Input from "./Input";

const NoteInputs = () => {
  return (
    <div className="mx-2 mb-2 h-full flex flex-col">
      <Input
        type="text"
        title="Note Title"
        name="Note Title"
        placeholder="Title..."
        className="mb-2"
      />
      <textarea
        className="bg-gray-200 w-full border border-gray-300 rounded-lg focus-visible:outline-none focus-visible:border-gray-600 resize-none p-2 transition-colors placeholder:text-gray-500 h-full"
        title="Note Body"
        name="Note Body"
        placeholder="Body..."
      ></textarea>
    </div>
  );
};

export default NoteInputs;
