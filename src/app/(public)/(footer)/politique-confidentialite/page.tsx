import Link from "next/link";

const PolitiqueConfidentialite = () => {
  return (
    <div className="flex flex-col py-6 gap-6 px-6 md:px-48 text-sm">
      <h1 className="pt-6 md:pt-12 text-4xl font-title text-primary-green">
        {"Politique de confidentialité"}
      </h1>
      <h2 className="italic">tripluch (https://tripluch.fr/)</h2>

      <h3 className="text-2xl font-title text-primary-green-dark">
        {"ARTICLE 1 : Préambule"}
      </h3>
      <div className="flex flex-col gap-2 px-6 font-light text-justify">
        {
          "La présente politique de confidentialité a pour but d’informer les utilisateurs du site :"
        }
        <ul className="px-6 pl-10 list-disc font-light">
          <li>
            {
              "Sur la manière dont sont collectées leurs données personnelles. Sont considérées comme des données personnelles, toute information permettant d’identifier un utilisateur. A ce titre, il peut s’agir : de ses noms et prénoms, de son âge, de son adresse postale ou email, de sa localisation ou encore de son adresse IP (liste non-exhaustive) ;"
            }
          </li>
          <li>
            {"Sur les droits dont ils disposent concernant ces données ;"}
          </li>
          <li>
            {
              "Sur la personne responsable du traitement des données à caractère personnel collectées et traitées ;"
            }
          </li>
          <li>{"Sur les destinataires de ces données personnelles ;"}</li>
          <li>{"Sur la politique du site en matière de cookies."}</li>
        </ul>
        {
          "Cette politique complète les mentions légales et les Conditions Générales d’Utilisation consultables par les utilisateurs à l’adresse suivante :"
        }
        <Link href="/privacy">https://tripluch.fr/privacy</Link>
      </div>
      <h3 className="text-2xl font-title text-primary-green-dark">
        {
          "ARTICLE 2 : Principes relatifs à la collecte et au traitement des données personnelles"
        }
      </h3>
      <div className="flex flex-col gap-2 px-6 font-light text-justify">
        {
          "Conformément à l’article 5 du Règlement européen 2016/679, les données à caractère personnel sont :"
        }
        <ul className="px-6 pl-10 list-disc font-light">
          <li>
            {
              "Traitées de manière licite, loyale et transparente au regard de la personne concernée ;"
            }
          </li>
          <li>
            {
              "Collectées pour des finalités déterminées (cf. Article 3.1 des présentes), explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités ;"
            }
          </li>
          <li>
            {
              "Adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées ;"
            }
          </li>
          <li>
            {
              "Exactes et, si nécessaire, tenues à jour. Toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder ;"
            }
          </li>
          <li>
            {
              "Conservées sous une forme permettant l'identification des personnes concernées pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont traitées ;"
            }
          </li>
          <li>
            {
              "Traitées de façon à garantir une sécurité appropriée des données collectées, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la destruction ou les dégâts d'origine accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées."
            }
          </li>

          {
            "Le traitement n'est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie :"
          }
          <li>
            {
              "La personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques ;"
            }
          </li>
          <li>
            {
              "Le traitement est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie ou à l'exécution de mesures précontractuelles prises à la demande de celle-ci ;"
            }
          </li>
          <li>
            {
              "Le traitement est nécessaire au respect d'une obligation légale à laquelle le responsable du traitement est soumis ;"
            }
          </li>
          <li>
            {
              "Le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique ;"
            }
          </li>
          <li>
            {
              "Le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement ;"
            }
          </li>
          <li>
            {
              "Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant."
            }
          </li>
        </ul>
      </div>
      <h3 className="text-2xl font-title text-primary-green-dark">
        {
          "ARTICLE 3 : Données à caractère personnel collectées et traitées dans le cadre de la navigation sur le site"
        }
      </h3>
      <div className="flex flex-col gap-2 px-6 font-light text-justify">
        <p> {"Article 3.1 : Données collectées"}</p>
        <p>
          {
            "Les données personnelles collectées dans le cadre de notre activité sont les suivantes :"
          }
          {" Nom, Prénom, type d’utilisateur et adresse e-mail. "}
          {
            "La collecte et le traitement de ces données répond à la (aux) finalité(s) suivante(s) :"
          }
          {" Personnalisation de compte et contact via e-mail."}
        </p>

        <p> {"Article 3.2 : Mode de collecte des données"}</p>
        <p>
          {
            "Lorsque vous utilisez notre site, sont automatiquement collectées les données suivantes :"
          }
          {
            " Des données analytiques via Google Analytics. Les données sont anonymes."
          }
        </p>
        <p>
          {" "}
          {
            "D’autres données personnelles sont collectées lorsque vous effectuez les opérations suivantes sur la plateforme :"
          }
          {
            " Nom, Prénom, type d’utilisateur et adresse e-mail à l’inscription de l’utilisateur."
          }
          {
            " Localisation, si autorisation par l'utilisateur, lors de l'ouverture de la carte. La localisation n'est pas stockée. "
          }
          {
            " Un token (clé) à la connexion de l'utilisateur pour faire vivre la session."
          }
        </p>

        <p>
          {" "}
          {
            "Elles sont conservées par le responsable du traitement dans des conditions raisonnables de sécurité, pour une durée de : tant que l’utilisateur est actif, les données sont conservées. Dans le cas contraire, nous limitons à 5 ans la période à compter de la dernière activité."
          }
          {
            " La société est susceptible de conserver certaines données à caractère personnel au-delà des délais annoncés ci-dessus afin de remplir ses obligations légales ou réglementaires."
          }
        </p>
        <p>{"Article 3.3 : Hébergement des données"}</p>
        <p>
          {
            "L'hebergement des données se fait par MongoDb sur un serveur AWS localisé à Paris ( AWS Paris (eu-west-3) ) "
          }
        </p>

        <p>{"Aucune donnée n’est transmise à un tier."}</p>
        <p>{"Aucun cookie n’est utilisé/collecté."}</p>
      </div>
      <h3 className="text-2xl font-title text-primary-green-dark">
        {
          "ARTICLE 4 : Responsable du traitement des données et délégué à la protection des données"
        }{" "}
      </h3>
      <div className="flex flex-col gap-2 px-6 font-light text-justify">
        <p>{"Article 4.1 : Le responsable du traitement des données : "}</p>
        <p>
          {
            "Les données à caractère personnelles sont collectées par tripluch, 205 place de la liberté 83000 Toulon, Société Anonyme, dont le numéro d’immatriculation est le 949 820 013 (00017)."
          }
          {
            " Le responsable du traitement des données à caractère personnel peut être contacté de la manière suivante :"
          }
          {" Par mail : contact@tripluch.fr"}
        </p>

        <p> {"Article 4.2 : Le délégué à la protection des données"}</p>

        <p>
          {
            "Le délégué à la protection des données de l’entreprise ou du responsable est : Maud Tribaudeau maud.tribaudeau@tripluch.fr."
          }
        </p>

        {
          "Si vous estimez, après nous avoir contactés, que vos droits “Informatique et Libertés”, ne sont pas respectés, vous pouvez adresser une information à la CNIL."
        }
      </div>
      <h3 className="text-2xl font-title text-primary-green-dark">
        {
          "ARTICLE 5 : Les droits de l'utilisateur en matière de collecte et traitement des données "
        }
      </h3>
      <div className="flex flex-col gap-2 px-6 font-light text-justify">
        {
          "Tout utilisateur concerné par le traitement de ses données personnelles peut se prévaloir des droits suivants, en application du règlement européen 2016/679 et de la Loi Informatique et Liberté (Loi 78-17 du 6 janvier 1978) :"
        }
        <ul className="px-6 pl-10 list-disc font-light">
          <li>
            {
              "Droit d’accès, de rectification et droit à l’effacement des données (posés respectivement aux articles 15, 16 et 17 du RGPD) ;"
            }
          </li>

          <li>{"Droit à la portabilité des données (article 20 du RGPD) ;"}</li>

          <li>
            {
              "Droit à la limitation (article 18 du RGPD) et à l’opposition du traitement des données (article 21 du RGPD) ;"
            }
          </li>

          <li>
            {
              "Droit de ne pas faire l’objet d’une décision fondée exclusivement sur un procédé automatisé ;"
            }
          </li>

          <li>{"Droit de déterminer le sort des données après la mort ;"}</li>

          <li>
            {
              "Droit de saisir l’autorité de contrôle compétente (article 77 du RGPD)."
            }
          </li>
        </ul>
        {
          "Pour exercer vos droits, veuillez adresser votre courrier par mail à contact@tripluch.fr. "
        }
        {
          "Afin que le responsable du traitement des données puisse faire droit à sa demande, l’utilisateur peut être tenu de lui communiquer certaines informations telles que : ses noms et prénoms, son adresse e-mail ainsi que son numéro de compte, d’espace personnel ou d’abonné. "
        }
        {"Consultez le site cnil.fr pour plus d’informations sur vos droits."}
      </div>

      <h3 className="text-2xl font-title text-primary-green-dark">
        {
          "ARTICLE 6 : Conditions de modification de la politique de confidentialité"
        }
      </h3>
      <div className="flex flex-col gap-2 px-6 font-light text-justify">
        {
          "L’éditeur du site tripluch se réserve le droit de pouvoir modifier la présente Politique à tout moment afin d’assurer aux utilisateurs du site sa conformité avec le droit en vigueur. "
        }
        {
          "Les éventuelles modifications ne sauraient avoir d’incidence sur les achats antérieurement effectués sur le site, lesquels restent soumis à la Politique en vigueur au moment de l’achat et telle qu’acceptée par l’utilisateur lors de la validation de l’achat. "
        }
        {
          "L’utilisateur est invité à prendre connaissance de cette Politique à chaque fois qu’il utilise nos services, sans qu’il soit nécessaire de l’en prévenir formellement. "
        }
        {
          "La présente politique, éditée le 15/10/2022, a été mise à jour le 18/03/2023."
        }
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
