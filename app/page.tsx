import {
  BarChart3,
  Check,
  Droplet,
  FileText,
  GraduationCap,
  Gauge,
  Receipt,
  ShieldCheck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import Image from "next/image";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

const FACTUS_URL = "https://www.factus.com.co/";

const navLinks = [
  { href: "#que-hace", label: "¿Qué hace?" },
  { href: "#factus", label: "Factus" },
  { href: "#precios", label: "Precios" },
];

const features = [
  {
    icon: Users,
    title: "Gestión de suscriptores",
    description:
      "Registra y administra a los usuarios del acueducto con su información de contacto, ubicación y estado del servicio.",
  },
  {
    icon: Gauge,
    title: "Lecturas de medidores",
    description:
      "Captura las lecturas de consumo de cada medidor y calcula automáticamente el valor a cobrar por periodo.",
  },
  {
    icon: Receipt,
    title: "Facturación electrónica",
    description:
      "Genera facturas con validez legal en Colombia, listas para enviar a tus suscriptores en PDF.",
  },
  {
    icon: FileText,
    title: "Notas crédito y débito",
    description:
      "Corrige o ajusta facturas ya emitidas con notas crédito y débito sin perder la trazabilidad.",
  },
  {
    icon: Wallet,
    title: "Cargos, novedades y pagos",
    description:
      "Configura tipos de cargos y novedades, asígnalos a los suscriptores y lleva el control de los pagos recibidos.",
  },
  {
    icon: BarChart3,
    title: "Reportes y análisis",
    description:
      "Consulta reportes y gráficos de consumo, facturación y cartera para tomar decisiones con datos.",
  },
  {
    icon: ShieldCheck,
    title: "Roles y accesos",
    description:
      "Separa lo que puede hacer cada persona del equipo: administración, lectura de medidores y consulta.",
  },
  {
    icon: Droplet,
    title: "Hecho para acueductos",
    description:
      "Pensado para acueductos comunitarios y municipales, con el vocabulario y los procesos del sector.",
  },
];

const factusSteps = [
  {
    title: "Se crea la factura",
    description:
      "El sistema calcula el consumo, los cargos y las novedades del suscriptor y arma la factura.",
  },
  {
    title: "Se envía a Factus",
    description:
      "La factura viaja a la API de Factus, que se encarga de la comunicación con la DIAN.",
  },
  {
    title: "Validación de la DIAN",
    description:
      "Factus valida la factura electrónica y devuelve el resultado de la validación.",
  },
  {
    title: "Entrega al suscriptor",
    description:
      "La factura queda lista con su código QR y su PDF para compartirla con el suscriptor.",
  },
];

const plans = [
  {
    name: "Comunitario",
    price: "$89.000",
    suscribers: "Hasta 500 suscriptores",
    highlighted: false,
    items: [
      "Gestión de suscriptores y medidores",
      "Lecturas y facturación mensual",
      "Facturación electrónica con Factus",
      "Reportes básicos",
    ],
  },
  {
    name: "Municipal",
    price: "$189.000",
    suscribers: "Hasta 2.000 suscriptores",
    highlighted: true,
    items: [
      "Todo lo del plan Comunitario",
      "Notas crédito y débito",
      "Cargos, novedades y control de pagos",
      "Reportes avanzados y gráficos de consumo",
      "Roles y accesos para el equipo",
    ],
  },
  {
    name: "Regional",
    price: "$399.000",
    suscribers: "Suscriptores ilimitados",
    highlighted: false,
    items: [
      "Todo lo del plan Municipal",
      "Varios acueductos en una sola cuenta",
      "Acompañamiento en la puesta en marcha",
      "Soporte prioritario",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* Navigation */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <div className="flex items-center gap-8">
            <Image
              src="/imgs/aqueduct_logo.svg"
              width={120}
              height={40}
              alt="Logo del acueducto"
              className="h-auto w-[100px] md:w-[120px]"
            />
            <div className="hidden items-center gap-6 text-sm font-medium text-[#5C5F6E] md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <Badge className="gap-1.5 whitespace-nowrap bg-primary/10 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary/10">
            <GraduationCap size={14} aria-hidden="true" />
            Proyecto estudiantil
          </Badge>
        </div>
      </nav>

      <div className="pt-20 md:pt-24">
        {/* Hero */}
        <header className="mx-auto mt-8 flex max-w-7xl flex-col px-4 md:mt-12 md:px-8">
          <p className="mx-auto mb-4 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-center text-xs font-medium text-primary sm:text-sm">
            <GraduationCap size={16} aria-hidden="true" />
            Hecho por Marian Juliana Salazar Garzón
          </p>
          <h1 className="text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Facturación electrónica para acueductos, impulsada por la{" "}
            <span className="text-primary">tecnología</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-[#5C5F6E] md:mt-6 md:text-lg lg:text-xl">
            Una solución integral para gestionar suscriptores, controlar el
            consumo y facturar electrónicamente, conectada con Factus para
            cumplir con la DIAN.
          </p>
          <div className="mx-auto mt-6 flex flex-col justify-center gap-4 sm:flex-row md:mt-8">
            <Button asChild className="bg-primary px-6 py-3 text-base text-white">
              <a href="#que-hace">Conocer el producto</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-xl border-2 bg-transparent px-6 py-3 text-base text-black"
            >
              <a href="#precios">Ver precios</a>
            </Button>
          </div>
          <div className="mt-8 w-full overflow-hidden md:mt-12">
            <Image
              src="/imgs/landing/img1.png"
              width={1437}
              height={769}
              alt="Vista previa del sistema de facturación"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </header>

        {/* What the product does */}
        <section
          id="que-hace"
          className="mx-auto mt-16 max-w-7xl scroll-mt-24 px-4 md:mt-24 md:px-8 lg:mt-32"
        >
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            ¿Qué es y qué hace este producto?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-[#5C5F6E] md:mt-6 md:text-lg">
            Es una plataforma web que reúne en un solo lugar todo el ciclo de
            cobro de un acueducto: desde registrar al suscriptor y leer su
            medidor, hasta emitir la factura electrónica y revisar los
            reportes.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="rounded-2xl bg-primary p-6 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader className="flex flex-col items-start p-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ECECFE] p-3">
                    <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="mt-2 p-0">
                  <CardDescription className="text-sm text-purple-100 md:text-base">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Factus */}
        <section
          id="factus"
          className="mx-auto mt-16 max-w-7xl scroll-mt-24 px-4 md:mt-24 md:px-8 lg:mt-32"
        >
          <div className="rounded-3xl bg-[#1f4cff14] p-6 md:p-10 lg:p-14">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="gap-1.5 bg-primary/10 text-primary hover:bg-primary/10">
                <Zap size={14} aria-hidden="true" />
                Integración
              </Badge>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                Conectado con{" "}
                <a
                  href={FACTUS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  Factus
                </a>
              </h2>
              <p className="mt-4 text-base text-[#5C5F6E] md:text-lg">
                El servicio se conecta con Factus, una plataforma colombiana de
                facturación electrónica. Así, el acueducto no tiene que
                preocuparse por la parte técnica de la DIAN: nosotros armamos la
                factura y Factus se encarga de validarla.
              </p>
            </div>

            <ol className="mt-8 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-4">
              {factusSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-[#5C5F6E]">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-center text-xs text-[#838696] md:text-sm">
              Factus es un servicio de terceros. Este proyecto no está afiliado
              ni respaldado por Factus.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="precios"
          className="mt-16 w-full scroll-mt-16 bg-gradient-to-br from-[#00E5FF] to-[#0099cc] px-4 py-12 md:mt-24 md:px-8 md:py-16 lg:mt-32 lg:py-24"
        >
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Simple. <span className="text-primary">Precios justos</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base text-white md:text-lg">
            Elige el plan según el tamaño de tu acueducto. Precios mensuales
            estimados en pesos colombianos (COP).
          </p>

          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 items-stretch gap-6 md:mt-12 lg:mt-16 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex w-full flex-col rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.highlighted
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                }`}
              >
                <CardHeader className="items-center">
                  <CardTitle className="text-2xl md:text-3xl">
                    {plan.name}
                  </CardTitle>
                  <CardDescription
                    className={plan.highlighted ? "text-purple-100" : ""}
                  >
                    {plan.suscribers}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-center text-4xl font-bold md:text-5xl">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-center text-base">COP / mes</p>
                  <hr
                    className={`my-6 border-t-2 border-dashed ${
                      plan.highlighted ? "border-white/60" : "border-[#E2E4E9]"
                    }`}
                  />
                  <ul className="space-y-3 text-sm md:text-base">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-white">
            Los valores son referenciales y solo con fines demostrativos. El
            costo de los documentos electrónicos de Factus se cobra por
            separado según su propia tarifa.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-16 w-full bg-gray-100 px-4 py-12 md:mt-24 md:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <Image
                src="/imgs/aqueduct_logo.svg"
                width={120}
                height={40}
                alt="Logo del acueducto"
                className="mb-4 h-auto"
              />
              <p className="max-w-md text-sm text-gray-600">
                Una solución integral para gestionar y facturar los procesos de
                los acueductos.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <p className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <GraduationCap
                  size={18}
                  className="text-primary"
                  aria-hidden="true"
                />
                Proyecto estudiantil
              </p>
              <p className="text-sm text-gray-600 md:text-right">
                Hecho por Marian Juliana Salazar Garzón.
              </p>
              <a
                href={FACTUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary underline underline-offset-4"
              >
                Facturación electrónica con Factus
              </a>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-gray-200 pt-6">
            <p className="text-center text-sm text-gray-600">
              © {new Date().getFullYear()} Proyecto académico sin fines
              comerciales.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
