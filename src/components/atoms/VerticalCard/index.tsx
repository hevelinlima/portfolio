import { useTranslation } from "react-i18next";
import { ExpContainer } from "./styles";

interface ExpProps{
  expId: number;
}

interface CoursesI{
  id: number;
  name: string;
  status: string;
  org: string;
  description: string;
  skills: string;
}

export const VerticalCard: React.FC<ExpProps> = ({ expId }) =>{
  const { t } = useTranslation("global");

  const courses: CoursesI[] = t("about-me.courses", { returnObjects: true });

  const course = courses.find((exp)=> exp.id === expId);

  if (!course){
    return <div>Course not found</div>
  }

  return(
    <ExpContainer>
      <h3>{course.name}</h3>
      <h5>{course.org}</h5>
      <h6>{course.status}</h6>
      <p>{course.description}</p>
      <p>{course.skills}</p>
    </ExpContainer>
  )
}