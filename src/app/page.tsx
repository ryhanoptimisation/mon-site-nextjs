import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Zap,
  Shield,
  HardDrive,
  Monitor,
  Gauge,
  CheckCircle,
  ArrowRight,
  Clock,
  Headphones,
  Cpu,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const benchmarks = [
    {
      game: "FiveM",
      before: "130",
      after: "270",
      gain: "+108%",
      note: "Ville sur Serveur +400 Membres",
      unit: "FPS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/FiveM-Logo.png"
    },
    {
      game: "Fortnite",
      before: "230",
      after: "395",
      gain: "+72%",
      note: "En Game",
      unit: "FPS",
      logo: "https://static.vecteezy.com/system/resources/previews/027/127/477/non_2x/fortnite-logo-fortnite-icon-transparent-free-png.png"
    },
    {
      game: "Warzone",
      before: "230",
      after: "420",
      gain: "+83%",
      note: "En Game Résurgence",
      unit: "FPS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Call_of_Duty_Warzone_Logo.png"
    },
    {
      game: "Valorant",
      before: "440",
      after: "650",
      gain: "+48%",
      note: "En Game",
      unit: "FPS",
      logo: "https://static.vecteezy.com/system/resources/previews/022/636/384/non_2x/valorant-logo-valorant-icon-transparent-free-png.png"
    },
    {
      game: "Counter Strike 2",
      before: "325",
      after: "540",
      gain: "+66%",
      note: "En Game",
      unit: "FPS",
      logo: "https://logodownload.org/wp-content/uploads/2025/01/cs-2-logo.png"
    },
    {
      game: "Minecraft",
      before: "800",
      after: "1400",
      gain: "+75%",
      note: "Hypixel Bedwars",
      unit: "FPS",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/minecraft-1-logo-png-transparent.png"
    },
    {
      game: "Input Lag",
      before: "120",
      after: "4",
      gain: "-97%",
      note: "LatencyMon",
      unit: "MS",
      isLatency: true
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center">
              <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center">
  <img 
    src="/logo.png"
    alt="Logo"
    className="w-8 h-8"
  />
</div>
            <span className="text-xl font-semibold text-zinc-900 dark:text-white">
              ryhan Optimisation
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#benchmark"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              Benchmark
            </a>
            <a
              href="#tarifs"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
            >
              Tarifs
            </a>
          </div>
          <Button size="sm">Contact</Button>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-1.5 text-sm font-medium"
            >
              Optimisation PC Professionnel
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
              Redonnez vie à votre PC
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
              Des performances optimales pour votre ordinateur. Nettoyage,
              optimisation et maintenance pour une expérience fluide et rapide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Rejoindre Notre
              <a href="https://discord.gg/ZDS9ww4SYd" target="_blank" rel="noopener noreferrer">
                   Serveur Discord
                   </a>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <div>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                70+
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                PC optimisés
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                98%
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Clients satisfaits
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                2x
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Plus rapide
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                24h
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                Délai moyen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Nos services
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Une gamme complète de services pour optimiser les performances de
              votre PC
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-700 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Boost de performance
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Accélérez votre PC en optimisant les paramètres système et les
                processus en arrière-plan.
              </p>
            </Card>

            <Card className="p-6 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-700 rounded-xl flex items-center justify-center mb-4">
                <HardDrive className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Nettoyage disque
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Suppression des fichiers inutiles, cache et temporaires pour
                libérer de l'espace.
              </p>
            </Card>

            <Card className="p-6 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-700 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Sécurité renforcée
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Suppression de la télémétrie et configuration optimale de la
                protection système.
              </p>
            </Card>

            <Card className="p-6 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-700 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Optimisation démarrage
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Réduisez le temps de démarrage en gérant les programmes qui se
                lancent automatiquement.
              </p>
            </Card>

            <Card className="p-6 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-700 rounded-xl flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Input Lag 0MS
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Optimisation approfondie pour atteindre 0MS d'input lag sur
                clavier, souris et manette.
              </p>
            </Card>

            <Card className="p-6 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-700 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Configuration BIOS
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Paramètres BIOS optimisés pour la performance et la stabilité de
                votre système.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benchmark Section */}
      <section id="benchmark" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Benchmark Gaming
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Résultats moyens constatés après optimisation sur différents jeux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benchmarks.map((item) => (
              <Card
                key={item.game}
                className="p-6 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden ${item.isLatency ? "bg-green-100 dark:bg-green-900" : "bg-zinc-100 dark:bg-zinc-700"}`}>
                    {item.isLatency ? (
                      <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                    ) : item.logo ? (
                      <Image
                        src={item.logo}
                        alt={item.game}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                        unoptimized
                      />
                    ) : null}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {item.game}
                    </h3>
                    {item.note && (
                      <p className="text-xs text-zinc-500">{item.note}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-500">Avant</span>
                    <span className={`font-medium ${item.isLatency ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"}`}>
                      {item.before} {item.unit}
                    </span>
                  </div>
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.isLatency ? "bg-zinc-900 dark:bg-white" : "bg-zinc-400"}`}
                      style={{
                        width: item.isLatency
                          ? "100%"
                          : `${(Number.parseInt(item.before) / Number.parseInt(item.after)) * 100}%`,
                      }}
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-500">Après</span>
                    <span className={`font-bold ${item.isLatency ? "text-green-600 dark:text-green-400" : "text-zinc-900 dark:text-white"}`}>
                      {item.after} {item.unit}
                    </span>
                  </div>
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.isLatency ? "bg-green-600 dark:bg-green-400" : "bg-zinc-900 dark:bg-white"}`}
                      style={{
                        width: item.isLatency
                          ? `${(Number.parseInt(item.after) / Number.parseInt(item.before)) * 100}%`
                          : "100%",
                      }}
                    />
                  </div>

                  <div className="pt-2 text-center">
                    <Badge variant="secondary" className={`text-sm font-bold ${item.isLatency ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" : ""}`}>
                      {item.gain}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
                Pourquoi me choisir ?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                Une expertise technique combinée à un service personnalisé pour
                des résultats garantis.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Travail 100% manuel
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      Aucun logiciel automatique, chaque optimisation est faite
                      à la main.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Intervention rapide
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      Prise en charge sous 24h via AnyDesk ou HopToDesk.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-white dark:bg-zinc-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">
                      Support et suivi inclus
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                      Un accompagnement sur mesure adapté à vos besoins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Avant optimisation
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-500">Lent</span>
                </div>
                <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full w-[30%] bg-zinc-400 rounded-full" />
                </div>

                <Separator />

                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Après optimisation
                  </span>
                  <span className="text-zinc-900 dark:text-white font-medium">
                    Rapide
                  </span>
                </div>
                <div className="h-3 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full w-[90%] bg-zinc-900 dark:bg-white rounded-full" />
                </div>

                <div className="pt-4 text-center">
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                    +80%
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                    Amélioration moyenne des performances
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section id="tarifs" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Nos Tarifs
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Deux formules d'optimisation adaptées à tes besoins, réalisées
              manuellement avec expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Offre Complète */}
            <Card className="p-8 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  Optimisation PC Complète
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  Un boost puissant pour ton PC, avec optimisation CPU avancée
                  et réglages profonds
                </p>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <p className="text-4xl font-bold text-zinc-900 dark:text-white">
                  55,99<span className="text-lg font-normal text-zinc-500">€</span>
                </p>
                <span className="text-sm text-zinc-500">PayPal</span>
                <span className="text-zinc-400 mx-1">|</span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  70€ PaySafeCard
                </span>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                    Analyse & Diagnostic
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      Diagnostic complet avec outils spécialisés
                    </li>
                    <li className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      Analyse poussée CPU, GPU et système
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                    Nettoyage & Performance
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      Réduction des services Windows inutiles
                    </li>
                    <li className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      Suppression télémétrie et collecte de données
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                    Optimisations Système
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      Configuration BIOS optimisée
                    </li>
                    <li className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      Input lag 0MS (clavier, souris, manette)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      Plan d'alimentation personnalisé
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                    Gaming & Support
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      2 Jeux optimisé au choix 
                     (FiveM, Fortnite, Warzone, Valorant, Minecraft, Counter Strike)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                      Support et suivi inclus
                    </li>
                  </ul>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-8">
                Ticket Discord
              </Button>
            </Card>

            {/* Offre Intégrale */}
            <Card className="p-8 bg-zinc-900 dark:bg-white border-zinc-900 dark:border-white relative flex flex-col">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-700 dark:bg-zinc-200 text-white dark:text-zinc-900">
                Recommandé
              </Badge>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white dark:text-zinc-900 mb-2">
                  Optimisation PC Intégrale
                </h3>
                <p className="text-zinc-400 dark:text-zinc-600 text-sm">
                  L'optimisation ultime avec overclocking optionnel
                </p>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <p className="text-4xl font-bold text-white dark:text-zinc-900">
                  87,99
                  <span className="text-lg font-normal text-zinc-400 dark:text-zinc-500">
                    €
                  </span>
                </p>
                <span className="text-sm text-zinc-400 dark:text-zinc-500">
                  PayPal
                </span>
                <span className="text-zinc-500 mx-1">|</span>
                <span className="text-sm text-zinc-300 dark:text-zinc-600">
                  100€ PaySafeCard
                </span>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-sm font-semibold text-zinc-200 dark:text-zinc-700 mb-2">
                    Tout de l'offre Complète +
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-zinc-300 dark:text-zinc-600">
                      <CheckCircle className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                      Analyse approfondie CPU, GPU, RAM et stockage
                    </li>
                    <li className="flex items-start gap-2 text-sm text-zinc-300 dark:text-zinc-600">
                      <CheckCircle className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                      Désactivation totale services Windows inutiles
                    </li>
                  </ul>
                </div>

                <Separator className="bg-zinc-700 dark:bg-zinc-300" />

                <div>
                  <p className="text-sm font-semibold text-zinc-200 dark:text-zinc-700 mb-2">
                    Overclocking (Optionnel)
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-zinc-300 dark:text-zinc-600">
                      <Zap className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                      Overclocking CPU avec contrôle thermique
                    </li>
                    <li className="flex items-start gap-2 text-sm text-zinc-300 dark:text-zinc-600">
                      <Zap className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                      Overclocking GPU (fréquence, voltage)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-zinc-300 dark:text-zinc-600">
                      <Zap className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                      Overclocking RAM (timings, fréquence)
                    </li>
                  </ul>
                </div>

                <Separator className="bg-zinc-700 dark:bg-zinc-300" />

                <div>
                  <p className="text-sm font-semibold text-zinc-200 dark:text-zinc-700 mb-2">
                    Gaming & Résultats
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-zinc-300 dark:text-zinc-600">
                      <CheckCircle className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                      Jeux optimisé (FiveM, Fortnite, Warzone, Valorant, Minecraft, Counter Strike)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-zinc-300 dark:text-zinc-600">
                      <CheckCircle className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                      Fluidité extrême & réactivité maximale
                    </li>
                    <li className="flex items-start gap-2 text-sm text-zinc-300 dark:text-zinc-600">
                      <CheckCircle className="w-4 h-4 text-zinc-400 dark:text-zinc-500 mt-0.5 flex-shrink-0" />
                      Support et suivi inclus
                    </li>
                  </ul>
                </div>
              </div>

              <Button className="w-full mt-8 bg-white text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
                Ticket Discord
              </Button>
            </Card>
          </div>

          {/* Info supplémentaire */}
          <div className="mt-10 text-center">
            <Card className="inline-block p-6 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">
                L'optimisation se fait via{" "}
                <span className="font-medium text-zinc-900 dark:text-white">
                  AnyDesk
                </span>{" "}
                ou{" "}
                <span className="font-medium text-zinc-900 dark:text-white">
                  HopToDesk
                </span>
                , en toute sécurité.
              </p>
              <p className="text-zinc-500 dark:text-zinc-500 text-xs">
                Ouvre un ticket sur Discord pour bénéficier du service.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Prêt à booster ton PC ?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Contacte-moi dès maintenant pour un diagnostic gratuit et découvre
            comment améliorer les performances de ton ordinateur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Pseudo Discord : newryhan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              ryhanoptimisation@gmail.com
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white dark:text-zinc-900" />
            </div>
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              ryhan Optimisation
            </span>
          </div>
          <p className="text-sm text-zinc-500">
            © 2026 ryhan Optimisation. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
