import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

export const DragDropSection = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.65015px dotted #333333;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 40px;
  padding: 0 10px;
  cursor: pointer;
`;

const DragDrop = props => {
  const files = [];
  const onDrop = useCallback(acceptedFiles => {
    files.push(acceptedFiles.length);
    const reduce = files.reduce(function(sum, curr) {
      return sum + curr;
    }, 0);
    props.fileLoadHandler(reduce);
    // eslint-disable-next-line
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop
  });

  return (
    <DragDropSection {...getRootProps()} onDrop={onDrop}>
      <input {...getInputProps()} />

      <p className="dropzone-content">Add file as attachment</p>

      <p>You uploaded {props.counter} files</p>
    </DragDropSection>
  );
};
export default DragDrop;
