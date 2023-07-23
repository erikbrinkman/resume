import { ReactElement } from "react";
import DotList from "../../components/dot-list";
import Experience from "../../components/experience";
import Footing from "../../components/footing";
import Heading from "../../components/heading";
import HeadingSpacer from "../../components/heading-spacer";
import LevelSkills from "../../components/level-skills";
import Publication from "../../components/publication";
import School from "../../components/school";
import Section from "../../components/section";

export default function CurriculumVitae(): ReactElement {
  return (
    <div className="overflow-hidden w-full min-h-screen [page:no\_margin]">
      <div className="max-w-3xl mx-auto w-full min-h-screen relative print:max-w-none">
        <Heading />
        <HeadingSpacer />
        <div className="p-6 md:pt-10 print:pt-10 space-y-4 min-h-screen">
          <Section title="Summary">
            Responsible AI Researcher focusing on fairness, but with skills
            across machine learning, micro-economics, and finance.
          </Section>
          <Section title="Employment">
            <Experience
              company="Meta"
              href="https://meta.com"
              position="Research Scientist"
              dates="2018&ndash;present"
            >
              <li>
                Researched, created, and deployed state-of-the-art large-scale
                sparse user-author-content models across Instagram, Integrity,
                Content-Understanding, and more.
              </li>
              <li>
                Developed transformer-based two-tower user-content models for
                cold-start unconnected content discovery that achieved half of
                our topline goals.
              </li>
              <li>
                Regularly conducted offline and online model analysis using SQL,
                python, and other necessary tools.
              </li>
              <li>
                Led ongoing project to learn hierarchical structure on top of
                existing user-content modeling.
              </li>
              <li>
                Advised two PhD interns on successful internship projects,
                resulting in accepted return offers.
              </li>
            </Experience>
            <Experience
              company="University of Michigan"
              href="https://umich.edu"
              position="Graduate Student Research Assistant"
              dates="2012&ndash;2018"
            >
              <li>
                Studied auction settings where having access to public
                information is bad for all agents (AAMAS 2014)
              </li>
              <li>
                Demonstrated surprising efficiency of continuous double auctions
                in the presence of strategic agents (Submitted TEAC)
              </li>
              <li>
                Investigated how to design a modern frequent call market using
                empirical mechanism design (EC)
              </li>
              <li>
                Analyzing &quot;Flash Crash&quot;, metrics that indicate
                susceptibility, and policies that mitigate risk in the presence
                of strategic traders
              </li>
            </Experience>
            <Experience
              company="Meta (then Facebook)"
              href="https://meta.com"
              position="Intern"
              dates="Summer 2017"
            >
              <li>
                Trained content embedding model of job openings using caffe2
              </li>
              <li>Doubled click-through rate for suggested jobs surface</li>
            </Experience>
            <Experience
              company="Yelp"
              href="https://yelp.com"
              position="Intern"
              dates="Summer 2015"
            >
              <li>
                Modified auto-bidder to increase advertiser return on
                investiment
              </li>
              <li>
                Ran live experiments to determine modification effects and
                optimal parameters
              </li>
            </Experience>
            <Experience
              company="Upwork (then Elance/oDesk)"
              href="https://upwork.com"
              position="Research Intern"
              dates="Summer 2014"
            >
              <li>
                Developed search ranking optimization based on click-through
                data
              </li>
              <li>
                Built profile photo categorizer for demographics and search
                ranking
              </li>
            </Experience>
            <Experience
              company="Univeristy of Michigan"
              href="https://umich.edu"
              position="Graduate Student Instructor"
              dates="Fall 2013"
            >
              <li>
                TA&apos;d introductory Algorithms and Data Structures course
              </li>
            </Experience>
            <Experience
              company="MIT Lincoln Laboratory"
              href="https://www.ll.mit.edu"
              position="Researcher"
              dates="2010&ndash;2012"
            >
              <li>
                Implemented an efficient topic modeling algorithm (PLSA) in
                MapReduce
              </li>
              <li>
                Prototyped real time entity resolving and disambiguation system
                for news corpora
              </li>
              <li>
                Designed a database that supports general queries on geographic
                descriptions
              </li>
              <li>Adapted aggregate movement model between data modalities</li>
            </Experience>
            <Experience
              company="JHU Applied Physics Laboratory"
              href="https://jhuapl.edu"
              position="Intern"
              dates="Summer 2009"
            >
              <li>
                Studied the Cramér-Rao Lower Bound (CRLB), and it&apos;s
                implications on polar coordinate tracking with both continuous
                and discrete noise
              </li>
              <li>
                Built a Matlab simulation to investigate the relation between
                Extended Kalman Filter tracking error and CRLB for important
                target trajectories
              </li>
            </Experience>
          </Section>
          <Section title="Education">
            <School
              name="University of Michigan"
              href="https://umich.edu"
              years="2012&ndash;2018"
              degree="PhD in Computer Science and Engineering"
              honors="Magna cum Laude"
              gpa={3.81}
            >
              <p className="text-justify">
                <span className="italic">Thesis: </span>Understanding Financial
                Market Behavior through Empirical Game-Theoretic Analysis
              </p>
              <p className="text-justify">
                <span className="italic">Honors: </span>
                <DotList
                  elems={[
                    "STIET Summer Research Grant Recipient",
                    "Eta Kappa Nu",
                    "Microsoft College Puzzle Challenge Finalist (2015)",
                  ]}
                />
              </p>
              <p className="text-justify">
                <span className="italic">Selected Courses: </span>
                <DotList
                  elems={[
                    "Machine Learning",
                    "Online Learning",
                    "Reinforcement Learning",
                    "Social Networks",
                  ]}
                />
              </p>
            </School>
            <School
              name="Washington University"
              href="https://wustl.edu"
              years="2006&ndash;2010"
              degree="BS in Systems Science"
              honors="Magna cum Laude"
              gpa={3.88}
            >
              <p className="text-justify">
                <span className="italic">Honors: </span>
                <DotList
                  elems={[
                    "Gregory Sullivan Award for Professional Achievement",
                    "Tau Beta Pi",
                    "Theta Xi",
                    "Dean's List",
                  ]}
                />
              </p>
              <p className="text-justify">
                <span className="italic">Selected Courses: </span>
                <DotList
                  elems={[
                    "Algorithms for Nonlinear Optimization",
                    "Nonlinear Dynamic Systems",
                  ]}
                />
              </p>
            </School>
          </Section>
          <Section title="Publications">
            <Publication
              title="Data Structures for Deviation Payoffs"
              authors={["B. Wiedenbeck", "E. Brinkman"]}
              conference="AAMAS 2023"
              url="https://www.southampton.ac.uk/~eg/AAMAS2023/pdfs/p670.pdf"
            />
            <Publication
              title="Empirical Mechanism Design for Optimizing Clearing Interval in Frequent Call Markets"
              authors={["E. Brinkman", "M. P. Wellman"]}
              conference="EC 2017"
              url="https://dl.acm.org/authorize?N30521"
            />
            <Publication
              title="Signal Structure and Strategic Information Acquisition"
              authors={["E. Brinkman", "M. P. Wellman", "S. E. Page"]}
              conference="AAMAS 2014"
              url="http://www.ifaamas.org/Proceedings/aamas2014/aamas/p229.pdf"
            />
          </Section>
          <Section title="Skills">
            <LevelSkills
              skills={{
                python: 5,
                numpy: 5,
                scipy: 5,
                pytorch: 5,
                sql: 4,
                "scikit-learn": 3,
                bash: 4,
                rust: 2,
                java: 4,
                "c++11": 3,
                lua: 3,
                hack: 2,
                haskell: 2,
                typescript: 3,
                broomball: 2,
              }}
              horizontal
            />
          </Section>
        </div>
        <Footing />
      </div>
    </div>
  );
}
