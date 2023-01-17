import { Badge } from "antd";

const BadgeComponent = ({ img, onClick }) => (
  <Badge count={1} color="#789940" offset={[0, 25]} onClick={onClick}>
    {img}
  </Badge>
);
export default BadgeComponent;
