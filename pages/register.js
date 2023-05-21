import React, { useState } from 'react';
import { Center, Box, Heading, VStack, FormControl, Input, Button, Radio } from 'native-base';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const Register = () => {
  const [date, setDate] = useState();
  const [pageShown, setPageShown] = useState(1);

  const onSetDate = (_, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showDatepicker = () => {
    DateTimePickerAndroid.open({
      value: date ? date: new Date(),
      onSetDate,
      mode: "date",
    });
  };

  const firstPage = useMemo(() => (
  <Center w="100%">
    <Box safeArea py="8" w="85%">
      <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
      color: "warmGray.50"
    }}>
        Queremos conhecer você!
      </Heading>
      <VStack space={2} mt="4">
        <FormControl >
          <FormControl.Label>Como podemos te chamar?</FormControl.Label>
          <Input w="100%" variant="underlined" placeholder="Informe seu nome ou apelido"/>
        </FormControl>
        <FormControl mt="4">
          <FormControl.Label>Que curso você faz?</FormControl.Label>
          <Input w="100%" variant="underlined"  placeholder="Nos diga o curso que você faz"/>
        </FormControl>
        <FormControl mt="4">
          <FormControl.Label>Qual a sua data de nascimento?</FormControl.Label>
          <Button
            alignSelf="flex-start"
            variant="ghost"
            paddingLeft="0"
            onPress={showDatepicker}
            title="Mostrar seleção de data!"
          >
            {date ? date : "SELECIONAR DATA"}
          </Button>
        </FormControl>
        <FormControl>
          <Radio.Group defaultValue="1" mt="4" name="userType" accessibilityLabel="Por favor, escolha a opção que mais se adequa ao seu caso">
            <Radio value="1" my={4} size="sm">
              <FormControl.Label>Sou um participante com deficiência visual</FormControl.Label>
            </Radio>
            <Radio value="2" my={4} size="sm">
              <FormControl.Label>Sou um participante com dificuldades de locomoção</FormControl.Label>
            </Radio>
            <Radio value="3" my={4} size="sm">
            <FormControl.Label>Não me encaixo em nenhum dos grupos acima</FormControl.Label>
            </Radio>
          </Radio.Group>
        </FormControl>
        <Button mt="8" colorScheme="indigo" onTouchEnd={setPageShown(2)}>
          Continuar
        </Button>
      </VStack>
    </Box>
  </Center>), []);

  const secondPage = useMemo(() => (<></>), [])

  return pageShown === 1 ? firstPage : secondPage;
};

export default Register;