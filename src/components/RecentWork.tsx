import { Dot } from "lucide-react"

export const RecentWork = () => {
  return (
    <div className="lg:h-[31rem] w-full bg-primary-100 rounded-xl border-2 border-quaternary-100 py-10 px-10">


      <div className="flex items-center">
        <Dot size={40} className="font-bold" />
        <h3 className="font-semibold">Recent Work</h3>
      </div>



      <div className="flex flex-col gap-5 mt-10">
        <Item
          title="Embedded Mobile Software Engineer"
          date="April 2023 - Present"
          companyName="CPQD"
          isCurrent={true}
        />
        <Item
          title="Mobile Software Engineer"
          date="June 2022 - May 2023"
          companyName="060 Tecnologia"
          isCurrent={false}
        />
        <Item
          title="Mobile Software Engineer"
          date="January 2022 - March 2023"
          companyName="PetWiz"
          isCurrent={false}
        />
        <Item
          title="Mobile Software Engineer"
          date="November  2021 - August 2023"
          companyName="Kiwi Manga"
          isCurrent={false}
        />
        <Item
          title="Mobile Software Engineer"
          date="September de 2023 - Present"
          companyName="Wealt"
          isCurrent={false}
        />
      </div>


    </div>
  )
}


interface IItemProps {
  title: string;
  date: string;
  companyName: string;
  isCurrent: boolean;
}

const Item = ({ title, date, companyName, isCurrent }: IItemProps) => {


  return (
    <div className="flex items-center justify-between">

      <div>
        <h4 className={`font-semibold text-lg ${isCurrent && 'text-secondary-100'}`}>{title}</h4>
        <p className="text-quinternary-100 text-base">{date}</p>
      </div>

      <p className="text-quinternary-100 text-right">
        {companyName}
      </p>

    </div>
  )

}