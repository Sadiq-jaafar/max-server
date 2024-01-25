// FileUploadPage.tsx

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";

const FileUploadPage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles);
  }, []);

  const uploadFiles = async () => {
    const formData = new FormData();

    uploadedFiles.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    try {
      const response = await axios.post(
        "http://localhost:9000/api/media",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Upload successful:", response.data);
      // Handle success as needed
    } catch (error) {
      console.error("Upload failed:", error);
      // Handle error as needed
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <VStack spacing={4} align="center">
      <Text fontSize="2xl">File Upload Page</Text>
      <Box
        p={4}
        borderWidth="2px"
        borderRadius="lg"
        {...getRootProps()}
        style={dropzoneStyle}
      >
        <input {...getInputProps()} />
        <Text>Drag and drop some files here, or click to select files</Text>
      </Box>
      {uploadedFiles.length > 0 && (
        <VStack>
          <Text fontSize="xl" mb={4}>
            Uploaded Files:
          </Text>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
          <Button onClick={uploadFiles} colorScheme="teal" mt={4}>
            Upload Files
          </Button>
        </VStack>
      )}
    </VStack>
  );
};

const dropzoneStyle: React.CSSProperties = {
  border: "2px dashed #ccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export default FileUploadPage;
