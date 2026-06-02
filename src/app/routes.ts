import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import Servicos from "./pages/Servicos";
import ServicoSobrancelhas from "./pages/ServicoSobrancelhas";
import ServicoLabios from "./pages/ServicoLabios";
import ServicoProtocolosRosto from "./pages/ServicoProtocolosRosto";
import ServicoLiftingPestanas from "./pages/ServicoLiftingPestanas";
import Ebooks from "./pages/Ebooks";
import FunilConversao from "./pages/FunilConversao";
import EstrategiaNotoriedade from "./pages/EstrategiaNotoriedade";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "sobre-nos", Component: SobreNos },
      { path: "servicos", Component: Servicos },
      { path: "servicos/sobrancelhas", Component: ServicoSobrancelhas },
      { path: "servicos/labios", Component: ServicoLabios },
      { path: "servicos/protocolos-rosto", Component: ServicoProtocolosRosto },
      { path: "servicos/lifting-pestanas", Component: ServicoLiftingPestanas },
      { path: "ebooks", Component: Ebooks },
      { path: "funil-conversao", Component: FunilConversao },
      { path: "estrategia-notoriedade", Component: EstrategiaNotoriedade },
    ],
  },
]);