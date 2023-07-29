import Footer from '../Layouts/Footer/index'
import HEADER from '../Layouts/Header/index'
const FAQ = () => {
  return (
    <div>
      <HEADER />
      <div className="bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold">FAQ</h1>
          <div className="my-6">
            <h2 className="text-xl font-bold">Où sont les besoins ?</h2>
            <p>
              Nous avons des mandats disponibles dans toutes les régions au
              Québec, les besoins varient selon ceux de nos clients. Nous
              embauchons également des préposés à l’entretien ménager pour la
              grande région de Montréal.
            </p>
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold">Quels sont les salaires ?</h2>
            <p>
              Nos salaires varient selon le titre d'emploi et le lieu de
              travail. Plus proche de la grande région de Montréal, il se peut
              que le salaire soit inférieur alors que pour d'autres régions plus
              éloignées, le salaire pourrait être plus élevé. En général, les
              taux payés peuvent différer de ceux du public pour des clients
              privés.
            </p>
            <p>
              Nous travaillons avec des professionnels de la santé incorporés et
              le taux horaire est plus élevé. Chez certains clients, nous avons
              un programme de remboursement des dépenses (kilométrage, per diem,
              frais d’hébergement) et dans certains cas une prime de nuit.
            </p>
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold">
              Comment savoir si je suis admissible ?
            </h2>
            <p>
              La meilleure manière de le savoir serait de nous appeler! Sinon,
              en ce qui a trait au infirmières et infirmières auxiliaires, si
              vous n’êtes pas membres en règle de l’Ordre des infirmiers et
              infirmières auxiliaires du Québec (OIIAQ), ou l’Ordre des
              infirmières et infirmiers du Québec (OIIQ), nous ne pourrons
              malheureusement pas procéder à votre embauche.
            </p>
          </div>
          <div className="my-6">
            <h2 className="text-xl font-bold">Où êtes-vous situé ?</h2>
            <p>
              Nous offrons nos services à travers le Québec! Cependant, notre
              siège social est situé au 4599 boul. Samson, Laval.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FAQ
