import React from "react";
import { Result, Button } from "antd";

function Page404(props) {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Страница не найдена"
      extra={
        <Button
          type="primary"
          onClick={() => {
            props.history.push("/");
          }}
        >
          На главную
        </Button>
      }
    />
  );
}

export default Page404;
