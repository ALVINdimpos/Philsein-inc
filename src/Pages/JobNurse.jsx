import { Link } from 'react-router-dom';
import HEADER from '../Layouts/Header/index'
const JobNurse = () => {
    return (
        <div>
            <HEADER />
            <div className="bg-gray-100 min-h-screen py-8">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-8">Emploi: Infirmier(ère)</h1>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <p>
                            Propulser votre carrière en soins infirmiers dès aujourd’hui! Nous avons des assignations disponibles à travers tous les CISSS & CIUSSS du Québec!
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md mt-8">
                        <h3 className="text-xl font-bold mb-4">Description de poste</h3>
                        <h4 className="text-lg font-bold mb-2">Nature du poste</h4>
                        <p>
                            Dans le cadre de votre emploi d’infirmier(ère) en agence, vous aurez à assumer la responsabilité d’un ensemble de soins infirmiers, tels que prescrit par l’OIIQ. Ceux-ci devront être adaptés aux besoins de vos patients et ce, dans différents environnements de travail.
                        </p>
                        <p>
                            Vous travaillerez aussi en collaboration avec d'autres professionnels de la santé pour assurer une bonne continuité des soins pour vos patients.
                        </p>
                        <p>
                            Finalement, au Groupe ADR, vous aurez également la chance d’occuper un poste d’Assistant(e) supérieur immédiat (ASI), ou de coordonnatrice des soins, selon votre expérience et formation.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md mt-8">
                        <h3 className="text-xl font-bold mb-4">Conditions de travail</h3>
                        <h4 className="text-lg font-bold mb-2">Salaire</h4>
                        <p>
                            Le salaire pour ce poste commence à 53$ de l’heure et varie principalement selon la région d’emploi.
                        </p>
                        <p>
                            Notez aussi que les taux payés pour nos clients privés diffèrent généralement de ceux de nos clients publics.
                        </p>
                        <p>
                            De plus, nous travaillons aussi avec des professionnels(elles) incorporés et les taux horaires sont aussi plus élevés dans ces cas.
                        </p>
                        <p>
                            Finalement, dans les régions sélectionnées, nous avons aussi un programme de remboursement des dépenses disponible.
                        </p>
                        <h4 className="text-lg font-bold mt-2">Types d'horaires</h4>
                        <p>
                            Postes à temps plein et à temps partiel disponibles. Possibilité de choisir des quarts ponctuellement, si vous le désirez.
                        </p>
                        <h4 className="text-lg font-bold mt-2">Types de quarts</h4>
                        <p>
                            Quarts de jour, de soir et de nuit disponibles.
                        </p>
                        <h4 className="text-lg font-bold mt-2">Lieu de travail</h4>
                        <p>
                            Choisissez l’emplacement et le type d’établissement de votre choix! Postes disponibles partout à travers le Québec.
                        </p>

                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md mt-8">
                        <h3 className="text-xl font-bold mb-4">Nos Avantages</h3>
                        <h4 className="text-lg font-bold mb-2">Programme de remboursement des dépenses</h4>
                        <p>
                            Profitez de notre programme de remboursement des dépenses dans les régions sélectionnées. Ce programme inclut:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>L'indemnité de logement.</li>
                            <li>Une allocation personnelle (per diem) de 30$ à 80$ par jours travaillés.</li>
                            <li>Le remboursement du temps de déplacement.</li>
                            <li>Le remboursement 0,48$ par kilomètre parcouru.</li>
                            <li>Le remboursement des frais de taxi ou de location.</li>
                            <li>Et même le transport par avion payé.</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md mt-8">
                        <h3 className="text-xl font-bold mb-4">Personnalisez votre expérience de travail</h3>
                        <p>
                            Nos infirmiers et infirmières ont la possibilité de moduler leur horaire et leurs quarts de travail en fonction de leurs disponibilités!
                        </p>
                        <p>
                            La région de travail, l'emplacement et même votre département comptent aussi parmi les préférences d'emploi que vous pourrez déterminer.
                        </p>
                        <p>
                            Ainsi, que vous préfériez un emploi à Montréal, en banlieue ou en régions éloignées - Exercez votre travail dans l'emplacement et les conditions qui vous conviennent le mieux!
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md mt-8">
                        <h3 className="text-xl font-bold mb-4">Lien utile</h3>
                        <ul className="list-disc list-inside">
                            <li>Tous nos emplois disponibles</li>
                            <li>À propos de nous</li>
                            <li>Article: Comment trouver la meilleure agence de placement infirmier?</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-md mt-8">
                        <h3 className="text-xl font-bold mb-4">Qualifications requises</h3>
                        <h4 className="text-lg font-bold mb-2">Formation</h4>
                        <p>
                            Détenir un DEC ou un BAC en soins infirmiers reconnu par le MEES.
                        </p>
                        <p>
                            Être membre de l’Ordre des infirmiers(ères) du Québec (OIIQ) et détenir un permis valide depuis au moins 1 an.
                        </p>
                        <p>
                            Avoir une certification de RCR valide.
                        </p>
                        <p>
                            Bonne maîtrise du français tant à l’oral qu’à l’écrit.
                        </p>
                        <h4 className="text-lg font-bold mt-2">Expérience</h4>
                        <p>
                            Une expérience minimale d’un an est requise en tant qu’infirmier(ère) dans un établissement public du réseau de la santé et des services sociaux du Québec.
                        </p>
                        <h4 className="text-lg font-bold mt-2">Profil recherché</h4>
                        <p>
                            En tant qu'infirmière, vous devrez être en mesure de travailler de manière autonome et en équipe, tout en étant capable de gérer les situations d'urgence avec calme et efficacité.
                        </p>
                        <p>
                            Cet emploi demande aussi une bonne capacité de communiquer clairement et efficacement avec les patients et leurs familles, ainsi que la maîtrise des protocoles de soins et des processus de documentation.
                        </p>
                        <p>
                            Finalement, en tant qu'infirmière chez notre agence de placement, vous devrez être capable de vous adapter à des environnements de soins différents.
                        </p>
                    </div>
                   <Link   to="/application"className="btn text-white px-4 py-2 mt-4 rounded-lg">APPLIQUER MAINTENANT</Link>

                </div>
              
            </div>
        </div>

    );
};

export default JobNurse;
