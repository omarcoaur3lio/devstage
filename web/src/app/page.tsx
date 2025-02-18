import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { Input } from "@/components/input";
import { ArrowRight, Copy } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Button>
          Enviar
          <ArrowRight />
        </Button>
        <IconButton>
          <Copy />
        </IconButton>
        <Input placeholder="Digite seu e-mail" />
        <Input placeholder="Digite seu e-mail" error />
    </main>
  );
}
