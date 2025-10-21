import { useState } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Input, 
  Textarea, 
  Button, 
  VStack, 
  HStack, 
  Flex,
  useToast
} from '@chakra-ui/react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function ContactSection() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Validación simple
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: 'Campos requeridos',
        description: 'Por favor completa todos los campos obligatorios.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    // Simulación de envío (conecta con tu backend aquí)
    setTimeout(() => {
      toast({
        title: '¡Mensaje enviado!',
        description: 'Nos pondremos en contacto contigo pronto.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      
      // Resetear formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@neuroeac.cl',
      link: 'mailto:contacto@neuroeac.cl'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+56 9 1234 5678',
      link: 'tel:+56912345678'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Temuco, Araucanía, Chile',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lun - Vie: 9:00 - 18:00',
      link: '#'
    }
  ];

  return (
    <Box 
      id="contacto" 
      py={{ base: 16, md: 24 }}
      bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Decoración de fondo */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        bgImage="radial-gradient(circle, white 1px, transparent 1px)"
        bgSize="50px 50px"
      />

      <Container maxW="7xl" position="relative" zIndex="1">
        {/* Encabezado */}
        <VStack gap={4} mb={16} textAlign="center">
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            color="white"
            fontWeight="bold"
          >
            Contáctanos
          </Heading>
          <Text 
            fontSize={{ base: 'lg', md: 'xl' }}
            color="whiteAlpha.900"
            maxW="2xl"
          >
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte. 
            Completa el formulario y nos pondremos en contacto contigo pronto.
          </Text>
        </VStack>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={8}
        >
          {/* Información de contacto */}
          <Box
            flex="1"
            bg="whiteAlpha.200"
            backdropFilter="blur(10px)"
            borderRadius="2xl"
            p={8}
            color="white"
          >
            <Heading size="lg" mb={6}>
              Información de Contacto
            </Heading>
            <VStack gap={6} align="stretch">
              {contactInfo.map((item, index) => (
                <Box
                  key={index}
                  as="a"
                  href={item.link}
                  p={4}
                  bg="whiteAlpha.100"
                  borderRadius="xl"
                  transition="all 0.3s"
                  _hover={{
                    bg: 'whiteAlpha.200',
                    transform: 'translateX(10px)'
                  }}
                  cursor={item.link !== '#' ? 'pointer' : 'default'}
                >
                  <HStack gap={4}>
                    <Box
                      bg="whiteAlpha.200"
                      p={3}
                      borderRadius="lg"
                    >
                      <item.icon size={24} />
                    </Box>
                    <Box>
                      <Text fontWeight="semibold" fontSize="sm" opacity="0.8">
                        {item.title}
                      </Text>
                      <Text fontWeight="medium" fontSize="lg">
                        {item.content}
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              ))}
            </VStack>

            {/* Información adicional */}
            <Box mt={8} p={6} bg="whiteAlpha.100" borderRadius="xl">
              <Heading size="md" mb={3}>
                ¿Por qué elegirnos?
              </Heading>
              <VStack align="start" gap={2}>
                <Text fontSize="sm">✓ Respuesta en menos de 24 horas</Text>
                <Text fontSize="sm">✓ Asesoría personalizada</Text>
                <Text fontSize="sm">✓ Tecnología de vanguardia</Text>
                <Text fontSize="sm">✓ Equipo profesional certificado</Text>
              </VStack>
            </Box>
          </Box>

          {/* Formulario */}
          <Box
            flex="1"
            bg="white"
            borderRadius="2xl"
            p={8}
            boxShadow="2xl"
          >
            <VStack gap={6}>
              <Box w="full">
                <Text mb={2} fontWeight="medium" color="gray.700">
                  Nombre completo *
                </Text>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  size="lg"
                  borderColor="gray.300"
                  _hover={{ borderColor: 'purple.400' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px #805ad5' }}
                />
              </Box>

              <Box w="full">
                <Text mb={2} fontWeight="medium" color="gray.700">
                  Email *
                </Text>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="juan@ejemplo.com"
                  size="lg"
                  borderColor="gray.300"
                  _hover={{ borderColor: 'purple.400' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px #805ad5' }}
                />
              </Box>

              <Box w="full">
                <Text mb={2} fontWeight="medium" color="gray.700">
                  Teléfono
                </Text>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+56 9 1234 5678"
                  size="lg"
                  borderColor="gray.300"
                  _hover={{ borderColor: 'purple.400' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px #805ad5' }}
                />
              </Box>

              <Box w="full">
                <Text mb={2} fontWeight="medium" color="gray.700">
                  Asunto *
                </Text>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                  size="lg"
                  borderColor="gray.300"
                  _hover={{ borderColor: 'purple.400' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px #805ad5' }}
                />
              </Box>

              <Box w="full">
                <Text mb={2} fontWeight="medium" color="gray.700">
                  Mensaje *
                </Text>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos más detalles..."
                  size="lg"
                  rows={6}
                  borderColor="gray.300"
                  _hover={{ borderColor: 'purple.400' }}
                  _focus={{ borderColor: 'purple.500', boxShadow: '0 0 0 1px #805ad5' }}
                  resize="vertical"
                />
              </Box>

              <Button
                onClick={handleSubmit}
                size="lg"
                w="full"
                bgGradient="linear(135deg, #667eea 0%, #764ba2 100%)"
                color="white"
                isLoading={isSubmitting}
                loadingText="Enviando..."
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl'
                }}
                _active={{
                  transform: 'translateY(0)'
                }}
                transition="all 0.2s"
              >
                <HStack>
                  <Text>Enviar Mensaje</Text>
                  <Send size={20} />
                </HStack>
              </Button>

              <Text fontSize="sm" color="gray.500" textAlign="center">
                * Campos obligatorios
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}