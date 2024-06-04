import { Container, Text, VStack, Heading, Box, Button, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const trainings = [
  {
    title: "Lean Training",
    description: "Learn the principles of Lean to improve efficiency and eliminate waste in your processes.",
    image: "https://images.unsplash.com/photo-1520529301226-42abc4cd766b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsZWFuJTIwdHJhaW5pbmd8ZW58MHx8fHwxNzE3NDc3MDgwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Six-Sigma Yellow Belt",
    description: "Introduction to Six-Sigma methodologies and tools for process improvement.",
    image: "https://images.unsplash.com/photo-1577451581039-032debfb47b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaXglMjBzaWdtYSUyMHllbGxvdyUyMGJlbHR8ZW58MHx8fHwxNzE3NDc3MDgwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Six-Sigma Green Belt",
    description: "Intermediate Six-Sigma training focusing on data analysis and project management.",
    image: "https://images.unsplash.com/photo-1577451581377-523b0a03bb6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaXglMjBzaWdtYSUyMGdyZWVuJTIwYmVsdHxlbnwwfHx8fDE3MTc0NzcwODF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Six-Sigma Black Belt",
    description: "Advanced Six-Sigma training for leading complex projects and driving organizational change.",
    image: "https://images.unsplash.com/photo-1650954316166-c3361fefcc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaXglMjBzaWdtYSUyMGJsYWNrJTIwYmVsdHxlbnwwfHx8fDE3MTc0NzcwODF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Root Cause Analysis",
    description: "Techniques to identify the root causes of problems and develop effective solutions.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb290JTIwY2F1c2UlMjBhbmFseXNpc3xlbnwwfHx8fDE3MTc0NzcwODJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Shingo Certification",
    description: "Achieve operational excellence with Shingo principles and practices.",
    image: "https://images.unsplash.com/photo-1680458842473-c0c2ad52f2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaGluZ28lMjBjZXJ0aWZpY2F0aW9ufGVufDB8fHx8MTcxNzQ3NzA4M3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Operational Excellence Tools",
    description: "Customized training in various operational excellence tools to meet your company's needs.",
    image: "https://images.unsplash.com/photo-1606676539940-12768ce0e762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcGVyYXRpb25hbCUyMGV4Y2VsbGVuY2UlMjB0b29sc3xlbnwwfHx8fDE3MTc0NzcwODN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const TrainingCard = ({ title, description, image }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
    <Image src={image} alt={title} borderRadius="md" mb={4} />
    <Heading size="md" mb={2}>
      {title}
    </Heading>
    <Text>{description}</Text>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Lean Six-Sigma Consulting & Training
        </Heading>
        <Text fontSize="lg" textAlign="center">
          We provide expert consulting and training in Lean and Six-Sigma methodologies to help your organization achieve operational excellence.
        </Text>

        <Heading as="h2" size="xl" textAlign="center">
          Our Training Programs
        </Heading>
        <VStack spacing={4}>
          {trainings.map((training, index) => (
            <TrainingCard key={index} {...training} />
          ))}
        </VStack>

        <Heading as="h2" size="xl" textAlign="center">
          Training Inquiry
        </Heading>
        <Text textAlign="center">For more information or to schedule a training session, please contact us:</Text>
        <HStack justifyContent="center" spacing={4}>
          <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
          <IconButton aria-label="Phone" icon={<FaPhone />} size="lg" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
