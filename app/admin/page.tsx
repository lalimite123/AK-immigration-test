"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Globe, Calculator, Database, CreditCard, ClipboardCheck } from "lucide-react"

export default function AdminPage() {
  const [evaluations, setEvaluations] = useState({
    work: {
      vorabzustimmung: false,
      anabinCheck: false,
      blockedAccount: false,
      documents: false,
      interview: false,
      score: 0,
    },
    study: {
      anabinCheck: false,
      fintiba: false,
      admission: false,
      language: false,
      finances: false,
      score: 0,
    },
    family: {
      residenceProof: false,
      incomeProof: false,
      housing: false,
      integration: false,
      documents: false,
      score: 0,
    },
    business: {
      businessPlan: false,
      capitalProof: false,
      marketStudy: false,
      legalCompliance: false,
      experience: false,
      score: 0,
    },
  })

  const updateEvaluation = (category: string, field: string, value: boolean) => {
    setEvaluations((prev) => {
      const updated = {
        ...prev,
        [category]: {
          ...prev[category],
          [field]: value,
        },
      }
      // Calculate score
      const categoryData = updated[category]
      const totalFields = Object.keys(categoryData).length - 1 // Exclude score field
      const checkedFields = Object.values(categoryData).filter(
        (val, index) => index < totalFields && val === true,
      ).length
      updated[category].score = Math.round((checkedFields / totalFields) * 100)

      return updated
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24 md:pt-28 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Panel d'Administration - Système d'Évaluation Visa
            </h1>
            <p className="text-gray-600">Outils interactifs pour l'évaluation complète des candidats</p>
          </div>

          <Tabs defaultValue="work" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="work">Visa Travail</TabsTrigger>
              <TabsTrigger value="study">Visa Étudiant</TabsTrigger>
              <TabsTrigger value="family">Regroupement Familial</TabsTrigger>
              <TabsTrigger value="business">Visa Affaires</TabsTrigger>
            </TabsList>

            <TabsContent value="work" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ClipboardCheck className="h-5 w-5" />
                      Système d'Évaluation Interactive
                      <Badge
                        variant={
                          evaluations.work.score >= 80
                            ? "default"
                            : evaluations.work.score >= 60
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        Score: {evaluations.work.score}%
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="vorabzustimmung"
                          checked={evaluations.work.vorabzustimmung}
                          onCheckedChange={(checked) => updateEvaluation("work", "vorabzustimmung", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="vorabzustimmung" className="text-sm font-medium">
                          Vorabzustimmung (Pré-approbation) obtenue
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="anabin-work"
                          checked={evaluations.work.anabinCheck}
                          onCheckedChange={(checked) => updateEvaluation("work", "anabinCheck", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="anabin-work" className="text-sm font-medium">
                          Vérification Anabin - Diplômes reconnus
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="blocked-account"
                          checked={evaluations.work.blockedAccount}
                          onCheckedChange={(checked) => updateEvaluation("work", "blockedAccount", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="blocked-account" className="text-sm font-medium">
                          Compte bloqué (Fintiba/Deutsche Bank) configuré
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="documents-work"
                          checked={evaluations.work.documents}
                          onCheckedChange={(checked) => updateEvaluation("work", "documents", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="documents-work" className="text-sm font-medium">
                          Tous documents requis fournis et authentifiés
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="interview-work"
                          checked={evaluations.work.interview}
                          onCheckedChange={(checked) => updateEvaluation("work", "interview", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="interview-work" className="text-sm font-medium">
                          Entretien consulaire réussi
                        </Label>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Label htmlFor="notes-work" className="text-sm font-medium">
                        Notes d'évaluation:
                      </Label>
                      <Textarea
                        id="notes-work"
                        placeholder="Observations, points d'attention, recommandations..."
                        className="mt-2"
                        suppressHydrationWarning={true}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Outils de Vérification
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        Vérification Anabin
                      </h4>
                      <p className="text-sm text-blue-600 mb-2">
                        Base de données pour la reconnaissance des diplômes étrangers
                      </p>
                      <div className="space-y-2">
                        <Input 
                          placeholder="Nom de l'université" 
                          suppressHydrationWarning={true}
                        />
                        <Input 
                          placeholder="Diplôme obtenu" 
                          suppressHydrationWarning={true}
                        />
                        <Button 
                          size="sm" 
                          className="w-full"
                          suppressHydrationWarning={true}
                        >
                          Vérifier sur Anabin
                        </Button>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Comptes Bloqués Acceptés
                      </h4>
                      <ul className="text-sm space-y-1">
                        <li>
                          • <strong>Fintiba:</strong> Le plus populaire, 100% digital
                        </li>
                        <li>
                          • <strong>Deutsche Bank:</strong> Traditionnel, agences physiques
                        </li>
                        <li>
                          • <strong>Coracle:</strong> Nouveau, frais réduits
                        </li>
                        <li>
                          • <strong>Expatrio:</strong> Services additionnels inclus
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Démarches Administratives</h4>
                      <ol className="text-sm space-y-1 list-decimal list-inside">
                        <li>Demande de Vorabzustimmung par l'employeur</li>
                        <li>Collecte des documents requis</li>
                        <li>Instruction par les services</li>
                        <li>Demande de visa par la famille</li>
                        <li>Entretien consulaire (si requis)</li>
                        <li>Délivrance des visas</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="study" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ClipboardCheck className="h-5 w-5" />
                      Évaluation Visa Étudiant
                      <Badge
                        variant={
                          evaluations.study.score >= 80
                            ? "default"
                            : evaluations.study.score >= 60
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        Score: {evaluations.study.score}%
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="anabin-study"
                          checked={evaluations.study.anabinCheck}
                          onCheckedChange={(checked) => updateEvaluation("study", "anabinCheck", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="anabin-study" className="text-sm font-medium">
                          Diplômes vérifiés sur Anabin (équivalence confirmée)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="fintiba-study"
                          checked={evaluations.study.fintiba}
                          onCheckedChange={(checked) => updateEvaluation("study", "fintiba", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="fintiba-study" className="text-sm font-medium">
                          Compte bloqué Fintiba/Deutsche Bank (11,208€ minimum)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="admission-study"
                          checked={evaluations.study.admission}
                          onCheckedChange={(checked) => updateEvaluation("study", "admission", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="admission-study" className="text-sm font-medium">
                          Lettre d'admission universitaire valide
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="language-study"
                          checked={evaluations.study.language}
                          onCheckedChange={(checked) => updateEvaluation("study", "language", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="language-study" className="text-sm font-medium">
                          Certificat de langue (TestDaF/DSH/IELTS) valide
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="finances-study"
                          checked={evaluations.study.finances}
                          onCheckedChange={(checked) => updateEvaluation("study", "finances", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="finances-study" className="text-sm font-medium">
                          Preuves financières complémentaires fournies
                        </Label>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Label htmlFor="notes-study" className="text-sm font-medium">
                        Notes d'évaluation:
                      </Label>
                      <Textarea
                        id="notes-study"
                        placeholder="Cohérence du parcours, motivation, projet d'études..."
                        className="mt-2"
                        suppressHydrationWarning={true}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Calculateur Financier
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-3">Montants Requis 2024</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Compte bloqué minimum:</span>
                          <span className="font-medium">11,208€</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Frais de scolarité (public):</span>
                          <span className="font-medium">150-350€/semestre</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Frais de scolarité (privé):</span>
                          <span className="font-medium">3,000-20,000€/an</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Assurance maladie:</span>
                          <span className="font-medium">110€/mois</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Fournisseurs de Comptes Bloqués</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span>
                            <strong>Fintiba:</strong>
                          </span>
                          <Badge variant="outline">Recommandé</Badge>
                        </div>
                        <p className="text-xs">Frais: 89€ + 5€/mois</p>

                        <div className="flex justify-between items-center">
                          <span>
                            <strong>Deutsche Bank:</strong>
                          </span>
                          <Badge variant="outline">Traditionnel</Badge>
                        </div>
                        <p className="text-xs">Frais: 150€ + frais bancaires</p>

                        <div className="flex justify-between items-center">
                          <span>
                            <strong>Expatrio:</strong>
                          </span>
                          <Badge variant="outline">Services +</Badge>
                        </div>
                        <p className="text-xs">Frais: 49€ + services inclus</p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Checklist Anabin</h4>
                      <ul className="text-sm space-y-1">
                        <li>✓ Rechercher l'établissement d'origine</li>
                        <li>✓ Vérifier le statut H+/H+/-</li>
                        <li>✓ Confirmer l'équivalence du diplôme</li>
                        <li>✓ Noter les conditions spéciales</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="family" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ClipboardCheck className="h-5 w-5" />
                      Évaluation Regroupement Familial
                      <Badge
                        variant={
                          evaluations.family.score >= 80
                            ? "default"
                            : evaluations.family.score >= 60
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        Score: {evaluations.family.score}%
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="residence-proof"
                          checked={evaluations.family.residenceProof}
                          onCheckedChange={(checked) => updateEvaluation("family", "residenceProof", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="residence-proof" className="text-sm font-medium">
                          Preuve de résidence légale (18 mois minimum)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="income-proof"
                          checked={evaluations.family.incomeProof}
                          onCheckedChange={(checked) => updateEvaluation("family", "incomeProof", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="income-proof" className="text-sm font-medium">
                          Justificatifs de revenus suffisants (seuils respectés)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="housing-family"
                          checked={evaluations.family.housing}
                          onCheckedChange={(checked) => updateEvaluation("family", "housing", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="housing-family" className="text-sm font-medium">
                          Logement adapté à la taille de la famille
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="integration-family"
                          checked={evaluations.family.integration}
                          onCheckedChange={(checked) => updateEvaluation("family", "integration", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="integration-family" className="text-sm font-medium">
                          Preuves d'intégration (langue, formation civique)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="documents-family"
                          checked={evaluations.family.documents}
                          onCheckedChange={(checked) => updateEvaluation("family", "documents", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="documents-family" className="text-sm font-medium">
                          Documents familiaux authentifiés (mariage, naissance)
                        </Label>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Label htmlFor="notes-family" className="text-sm font-medium">
                        Notes d'évaluation:
                      </Label>
                      <Textarea
                        id="notes-family"
                        placeholder="Situation familiale, liens, intégration..."
                        className="mt-2"
                        suppressHydrationWarning={true}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Calculateur de Revenus
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-3">Seuils de Revenus 2024</h4>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="family-size" className="text-sm">
                            Nombre de personnes dans la famille:
                          </Label>
                          <Input 
                            id="family-size" 
                            type="number" 
                            min="2" 
                            max="10" 
                            defaultValue="2" 
                            className="mt-1"
                            suppressHydrationWarning={true}
                          />
                        </div>
                        <div className="text-sm space-y-1">
                          <div className="flex justify-between">
                            <span>Pour 2 personnes:</span>
                            <span className="font-medium">1,800€/mois</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pour 3 personnes:</span>
                            <span className="font-medium">2,250€/mois</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pour 4 personnes:</span>
                            <span className="font-medium">2,700€/mois</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Types de Revenus Acceptés</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Salaires (CDI privilégié)</li>
                        <li>• Revenus d'activité indépendante</li>
                        <li>• Pensions et retraites</li>
                        <li>• Allocations familiales</li>
                        <li>• Revenus fonciers</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Démarches Administratives</h4>
                      <ol className="text-sm space-y-1 list-decimal list-inside">
                        <li>Dépôt de demande en préfecture</li>
                        <li>Constitution du dossier complet</li>
                        <li>Instruction par les services</li>
                        <li>Demande de visa par la famille</li>
                        <li>Entretien consulaire (si requis)</li>
                        <li>Délivrance des visas</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="business" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ClipboardCheck className="h-5 w-5" />
                      Évaluation Visa Affaires
                      <Badge
                        variant={
                          evaluations.business.score >= 80
                            ? "default"
                            : evaluations.business.score >= 60
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        Score: {evaluations.business.score}%
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="business-plan"
                          checked={evaluations.business.businessPlan}
                          onCheckedChange={(checked) => updateEvaluation("business", "businessPlan", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="business-plan" className="text-sm font-medium">
                          Business plan détaillé et viable (3 ans)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="capital-proof"
                          checked={evaluations.business.capitalProof}
                          onCheckedChange={(checked) => updateEvaluation("business", "capitalProof", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="capital-proof" className="text-sm font-medium">
                          Preuves de capital disponible (minimum atteint)
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="market-study"
                          checked={evaluations.business.marketStudy}
                          onCheckedChange={(checked) => updateEvaluation("business", "marketStudy", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="market-study" className="text-sm font-medium">
                          Étude de marché approfondie fournie
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="legal-compliance"
                          checked={evaluations.business.legalCompliance}
                          onCheckedChange={(checked) => updateEvaluation("business", "legalCompliance", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="legal-compliance" className="text-sm font-medium">
                          Conformité réglementaire vérifiée
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="experience-business"
                          checked={evaluations.business.experience}
                          onCheckedChange={(checked) => updateEvaluation("business", "experience", checked)}
                          suppressHydrationWarning={true}
                        />
                        <Label htmlFor="experience-business" className="text-sm font-medium">
                          Expérience entrepreneuriale démontrée
                        </Label>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <Label htmlFor="notes-business" className="text-sm font-medium">
                        Notes d'évaluation:
                      </Label>
                      <Textarea
                        id="notes-business"
                        placeholder="Viabilité du projet, impact économique, secteur d'activité..."
                        className="mt-2"
                        suppressHydrationWarning={true}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Critères d'Investissement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-3">Montants Minimums par Secteur</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Commerce/Services:</span>
                          <span className="font-medium">50,000€</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Industrie/Production:</span>
                          <span className="font-medium">100,000€</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Technologie/Innovation:</span>
                          <span className="font-medium">200,000€</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Immobilier/Hôtellerie:</span>
                          <span className="font-medium">500,000€</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Démarches Administratives</h4>
                      <ol className="text-sm space-y-1 list-decimal list-inside">
                        <li>Étude de faisabilité préliminaire</li>
                        <li>Constitution de la société</li>
                        <li>Ouverture de compte bancaire professionnel</li>
                        <li>Dépôt de capital social</li>
                        <li>Demande de visa investisseur</li>
                        <li>Lancement des activités</li>
                      </ol>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Documents Requis</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Statuts de la société</li>
                        <li>• Justificatifs de fonds</li>
                        <li>• Business plan détaillé</li>
                        <li>• CV entrepreneurial</li>
                        <li>• Étude de marché</li>
                        <li>• Projections financières</li>
                        <li>• Assurances professionnelles</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-red-600">Guide d'Utilisation du Système d'Évaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">Score 80-100%</h4>
                  <p>Dossier excellent, forte probabilité d'acceptation. Procéder avec confiance.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-600">Score 60-79%</h4>
                  <p>Dossier acceptable avec réserves. Identifier les points d'amélioration.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-600">Score inférieur à 60%</h4>
                  <p>Dossier insuffisant. Recommander des améliorations avant soumission.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}