"use client";
import {
  Autocomplete,
  AutocompleteItem,
  Checkbox,
  Input,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import { SelectorIcon } from "../../../components/selector-icon";
import { Button } from "@/components/ui/button";
import { Send, SendHorizontalIcon } from "lucide-react";
import { tv } from "tailwind-variants";
import { FaListCheck, FaMobileScreen } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";

const checkBoxVariant = tv({
  //   base: "",
  variants: {
    icon: {
      iconBackground: "text-sky-500",
    },
  },
});

const animals = [
  {
    label: "Desenvolvimento de Aplicativos Móveis",
    value: "mobile-development",
    // icon: <FaMobileScreen size={20} className="text-sky-900" />,
    description: "The second most popular pet in the world",
  },
  {
    label: "Desenvolvimento de Aplicativos Web",
    value: "web-development",
    // icon: <FaLaptop size={20} className="text-sky-900" />,
    description: "The most popular pet in the world",
  },
  {
    label: "Consultoria Informática",
    value: "it-consulting",
    // icon: <FaListCheck size={20} className="text-sky-900" />,
    description: "The largest land animal",
  },
];

type Props = {};

const ContactForm = (props: Props) => {
  const [autocompleteValue, setAutocompleteValue] = useState("");
  const [selectedKey, setSelectedKey] = useState<string | undefined>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebiste] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [mailSubscription, setMailSubscription] = useState<
    "subscribed" | "unsubscribed"
  >("unsubscribed");

  const onSelectionChange = (id: string) => {
    setSelectedKey(id);
  };

  const onInputChange = (value: string) => {
    setAutocompleteValue(value);
  };

  const handleMailSubscription = (isSelected: boolean) => {
    if (isSelected) {
      setMailSubscription("subscribed");
    } else {
      setMailSubscription("unsubscribed");
    }
  };

  console.log("autocomplete value:", autocompleteValue);

  return (
    <div>
      <form className=" bg-white p-6 flex flex-col justify-between items-center">
        <div className="flex flex-wrap w-full md:flex-nowrap gap-6 mb-6 md:mb-12">
          <Input
            isRequired
            // isInvalid={false}
            // errorMessage={"Informe o seu nome"}
            type="text"
            label="Nome"
            placeholder="Seu nome"
            variant="bordered"
            color="default"
            radius="md"
            value={name}
            labelPlacement="outside"
            size="lg"
            // isClearable
            onValueChange={(value) => setName(value)}
          />
          <Input
            isRequired
            // isInvalid={false}
            // errorMessage="Informe o seu endereço de email"
            type="email"
            label="Email"
            placeholder="Seu endereço de email"
            variant="bordered"
            value={email}
            labelPlacement="outside"
            size="lg"
            // isClearable
            onValueChange={(value) => setEmail(value)}
          />
        </div>

        <div className="flex flex-wrap w-full md:flex-nowrap gap-6 mb-6 md:mb-12">
          <Input
            // isRequired
            // isInvalid={false}
            // errorMessage={"Informe o seu nome"}
            type="text"
            label="Nome da Empresa"
            placeholder="Informe o nome da sua empresa"
            variant="bordered"
            color="default"
            radius="md"
            value={companyName}
            labelPlacement="outside"
            size="lg"
            // isClearable
            onValueChange={(value) => setCompanyName(value)}
          />
          <Input
            // isRequired
            // isInvalid={false}
            // errorMessage="Informe o seu endereço de email"
            type="text"
            label="O website da Empresa"
            placeholder="Informe o website da sua empresa"
            variant="bordered"
            value={companyWebsite}
            labelPlacement="outside"
            size="lg"
            // isClearable
            onValueChange={(value) => setCompanyWebiste(value)}
          />
        </div>

        <div className="flex flex-wrap w-full md:flex-nowrap gap-6 mb-6 md:mb-12">
          <Input
            // isRequired
            // isInvalid={false}
            // errorMessage={"Informe o seu nome"}
            type="numeric"
            label="Número de Telefone"
            placeholder="Número de telefone"
            variant="bordered"
            color="default"
            radius="md"
            value={phone}
            isRequired
            labelPlacement="outside"
            size="lg"
            // isClearable
            onValueChange={(value) => setPhone(value)}
          />
          <Autocomplete
            label="Tipo de Serviço"
            variant="bordered"
            color="default"
            radius="md"
            size="lg"
            isRequired
            inputValue={selectedKey}
            // onChange={() => setSelectedKey(value)}
            placeholder="Indique o tipo de serviço de que precisa"
            allowsCustomValue={true}
            defaultItems={animals}
            labelPlacement="outside"
            // onSelectionChange={(value) => onSelectionChange(value)}
            onInputChange={(value) => onInputChange(value)}
            selectorIcon={<SelectorIcon />}
            className="listbox-sky-500"
          >
            {(item) => (
              <AutocompleteItem
                key={item.value}
                className="h-12"
                textValue={item.value}
              >
                {item.label}
              </AutocompleteItem>
            )}
          </Autocomplete>
        </div>

        <div className="flex flex-col w-full md:flex-nowrap mb-3">
          <Textarea
            isRequired
            label="Como Podemos Ajudar?"
            labelPlacement="outside"
            placeholder="Deixe a sua mensagem aqui"
            // className="max-w-xs"
            color="default"
            variant="bordered"
            radius="md"
            size="lg"
            value={message}
            onValueChange={(value) => setMessage(value)}
            minRows={8}
          />
        </div>

        <div className="flex w-full">
          <Checkbox
            value={mailSubscription}
            isSelected={mailSubscription === "subscribed"}
            onValueChange={(isSelected) => handleMailSubscription(isSelected)}
            radius="none"
          >
            Sim, quero receber notificações sobre as novidades da Tecmoza.
          </Checkbox>
        </div>

        <div className="flex justify-end w-full mt-3">
          <Button
            type="submit"
            className="flex gap-2 justify-center items-center w-[150px] h-12 bg-sky-500 hover:bg-sky-900 rounded-md text-lg hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-sky-900"
            // onClick={handleSubmit}
          >
            Enviar <SendHorizontalIcon className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
