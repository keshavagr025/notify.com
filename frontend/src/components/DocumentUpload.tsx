const DocumentUpload = () => {
  return (
    <div className="border border-dashed rounded p-6 bg-white text-center">
      <p className="text-gray-600 mb-2">
        Upload PDF / DOCX / Image
      </p>
      <input type="file" />
    </div>
  );
};

export default DocumentUpload;
