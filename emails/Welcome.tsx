import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeProps {
  name: string;
  email: string;
  companyName?: string;
  companyWebsite?: string;
  phone: string;
  service: string;
  message: string;
}

export const Welcome = ({
  name,
  email,
  companyName,
  companyWebsite,
  phone,
  service,
  message,
}: WelcomeProps) => (
  <Html>
    <Head />
    <Preview>{`Sr. ${name} contactou a TECMOZA`}</Preview>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007291",
            },
          },
        },
      }}
    >
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>{name} contactou a TECMOZA</Heading>
          <Text className="mb-4">
            {`Email: ${email}`}
            <br />
            {`Company: ${companyName}`}
            <br />
            {`Website: ${companyWebsite}`}
            <br />
            {`Phone: ${phone}`}
            <br />
            {`Service: ${service}`}
            <br />
            {`Message: ${message}`}
            <br />
          </Text>


          <Text style={footer}>Tecmoza, your trustful partner</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);


export default Welcome;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
