import { DragDrop } from "@uppy/react";
import { useState } from "react";
import Uppy from "@uppy/core";
import zh_CN from "@uppy/locales/lib/zh_CN";
// import DB from "@uppy/dashboard";
import "@uppy/core/dist/style.min.css";
import "@uppy/drag-drop/dist/style.min.css";
// import "@uppy/dashboard/dist/style.min.css";
import "./FilePicker.css";

const FilePicker = () => {
  const [uppy] = useState(
    () =>
      new Uppy({
        locale: zh_CN,
        onBeforeFileAdded(currentFile, _files) {
          console.log(currentFile.data);
          return currentFile;
        },

        restrictions: {
          maxNumberOfFiles: 1,
          allowedFileTypes: [
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/json",
          ],
        },
        allowMultipleUploadBatches: false,
      }),
  );
  return <DragDrop id="uppy-dragdrop" width={460} uppy={uppy} />;
};

export default FilePicker;
