import React from "react";

const ErrorCard = ({ content }) => {
  const { date_created, reporter, comment, error_type } = content;

  return (
    <box>
      <box>
        {date_created}
        {reporter.name}
        {comment}
      </box>
      <box>
        {error_type.title}
        {error_type.description}
        {error_type.posible_wrokourounds[1]}
      </box>
    </box>
  );
};

export default ErrorCard;
