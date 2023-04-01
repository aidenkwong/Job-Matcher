import "./App.css";
import { useState } from "react";
import Job from "./components/Job";

import { message, Upload, Typography } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import ViewJob from "./components/ViewJob";
import axios from "axios";
const { Dragger } = Upload;
const { Title } = Typography;

function App() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any>(null);

  const props: UploadProps = {
    name: "file",
    maxCount: 1,
    multiple: false,
    customRequest: async (options) => {
      const { onSuccess, onError, file, onProgress } = options;

      const fmData = new FormData();
      const config = {
        headers: { "content-type": "multipart/form-data" },
        onUploadProgress: (event: any) => {
          const percent = Math.floor((event.loaded / event.total) * 100);
          onProgress!!({ percent: percent });
        }
      };
      fmData.append("file", file);
      try {
        const res = await axios.post("http://localhost:8000/", fmData, config);

        onSuccess!!("Ok");
        console.log("server res: ", res);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  return (
    <div className="App">
      <Title>Upload your resume to find jobs.</Title>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single upload. Strictly prohibited from uploading
          company data or other banned files.
        </p>
      </Dragger>
      <div style={{ marginTop: "0.5rem", display: "flex" }}>
        <div style={{ width: "fit-content", marginRight: "16px" }}>
          {jobs.map((job, idx) => (
            <Job
              key={idx}
              job={job}
              idx={idx}
              setSelectedJob={setSelectedJob}
            />
          ))}
        </div>
        <div style={{ flex: 1 }}>
          {selectedJob && <ViewJob job={selectedJob} />}
        </div>
      </div>
    </div>
  );
}

export default App;
