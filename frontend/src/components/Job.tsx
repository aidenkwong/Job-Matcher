import { Job as JobType } from "../types";
import { Card, Space } from "antd";
import { Divider, Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const Job = ({
  job,
  idx,
  setSelectedJob
}: {
  job: JobType;
  idx: number;
  setSelectedJob: React.Dispatch<any>;
}) => {
  const handleOnClick = () => {
    setSelectedJob(job);
  };
  return (
    <Card
      title={
        <Text strong className="text-lg">
          {job.title}
        </Text>
      }
      className="w-[450px] cursor-pointer mb-2"
      onClick={handleOnClick}
      hoverable
    >
      <p style={{ whiteSpace: "pre" }}>
        <Text strong>{job.company}</Text>
        {"\t"}
        {job.stars && job.reviews
          ? `${job.stars}/5 star average from ${job.reviews} reviews`
          : ""}
      </p>
      <p>Location: {job.location}</p>
      <p>Details: {job.jobDetails}</p>
      {job.qualifications && <p>Qualifications: {job.qualifications}</p>}
      <p>Job Description:</p>
      <p className="pre-line line-clamp-3">{job.jobDescription}</p>
    </Card>
  );
};

export default Job;
