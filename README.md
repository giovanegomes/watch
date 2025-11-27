# Watch

Interface da homepage do serviço de streaming **Watch** desenvolvido utilizando **Next.js** e **Tailwind CSS**.

---

# Ambiente

Projeto: [https://watch-peach-pi.vercel.app/](https://watch-peach-pi.vercel.app/)

Deploy automático via **Vercel**.

---

## Tecnologias Utilizadas

| Categoria          | Tecnologias           |
| ------------------ | --------------------- |
| Linguagem          | **TypeScript (ES6+)** |
| Framework          | **Next.js**           |
| CSS Framework      | **Tailwind CSS**      |
| Hospedagem         | **Vercel**            |
| Controle de versão | **Git / GitHub**      |

---

## Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone git@github.com:giovanegomes/watch.git
   cd watch
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Acesse:**  
   [http://localhost:3000/](http://localhost:3000/)

---

## Estrutura do Projeto

```
/
├── public/                  # Imagens, vídeos e logos utilizados no projeto
├── src/                     # Código fonte do projeto
│   ├── app/                 # Configurações globais, tema da aplicação e definição da Homepage
│   ├── components/          # Componentes reutilizáveis
│   ├── pages/               # Definição das telas da aplicação
│   │   ├── home/            # Homepage
│   │   │   ├── components/  # Componentes específicos da homepage
│   │   │   ├── sections/    # Sections utilizadas para criar a homepage
│   │   │   ├── index.tsx    # Definição da página
│   ├── services/            # Services para carregar os dados utilizados na aplicação.
```
