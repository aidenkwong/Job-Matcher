import React from "react";
import { Job } from "../types";
import { Card, Space } from "antd";
import { Divider, Typography, Descriptions } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const ViewJob = ({ job }: { job: Job }) => {
  return (
    <Card
      title={
        <Text strong className="text-lg">
          {job.title}
        </Text>
      }
      className="sticky top-4 overflow-auto max-h-[90vh]"
    >
      <div className="flex justify-between items-center">
        <p style={{ color: "#1890ff" }}>{job.company}</p>
        <a href={job.url} target="_blank" className="font-normal text-sm">
          {job.url}
        </a>
      </div>
      {job.stars > 0 && <p>Stars: {job.stars} / 5</p>}
      {job.reviews > 0 && <p>Reviews: {job.reviews}</p>}
      {job.location && <p>{job.location}</p>}

      {job.jobDetails && (
        <>
          <Title level={4}>Job Details</Title>
          <p>{job.jobDetails}</p>
        </>
      )}
      {job.qualifications && <p>Qualifications: {job.qualifications}</p>}
      <Title level={4}>Job Description</Title>
      <p className="whitespace-pre-line max-w-[65ch]">{job.jobDescription}</p>
      {job.benefits && <p>Benefits: {job.benefits}</p>}
    </Card>
  );
};

export default ViewJob;
