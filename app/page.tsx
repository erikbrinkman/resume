import { ReactElement } from "react";
import Experience from "../components/experience";
import Footing from "../components/footing";
import Heading from "../components/heading";
import HeadingSpacer from "../components/heading-spacer";
import LevelSkills from "../components/level-skills";
import Publication from "../components/publication";
import School from "../components/school";
import Section from "../components/section";

export default function Resume(): ReactElement {
  return (
    <div className="overflow-hidden w-full min-h-screen no-page-margin">
      <div className="max-w-3xl mx-auto w-full min-h-screen print:h-screen relative print:max-w-none">
        <Heading />
        <div className="w-full min-h-screen print:h-screen flex flex-col md:flex-row print:flex-row">
          <div className="flex flex-col justify-between p-6 pb-4 md:pt-10 print:pt-10 md:pb-40 print:pb-[21.25565616700221vw] space-y-4 print:space-y-2">
            <Section title="Summary">
              {/* NOTE hacky adjustments to get float to still wrap text at an angle */}
              <div className="-mt-[4.5rem]">
                <HeadingSpacer />
              </div>
              <p className="pt-16">
                Researcher with skills across advanced machine learning,
                micro-economics, and finance. I&apos;ve leveraged these the past
                three years to empower teams across Meta and to create immediate
                returns for key partner teams.
              </p>
            </Section>
            <Section title="Current Position">
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
                  Regularly conducted offline and online model analysis using
                  SQL, python, and other necessary tools.
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
            </Section>
            <Section title="Education">
              <School
                name="University of Michigan"
                href="https://umich.edu"
                years="2012&ndash;2018"
                degree="PhD in Computer Science and Engineering"
                honors="Magna cum Laude"
              >
                <p className="text-justify">
                  Understanding Financial Market Behavior through Empirical
                  Game-Theoretic Analysis
                </p>
              </School>
              <School
                name="Washington University"
                href="https://wustl.edu"
                years="2006&ndash;2010"
                degree="BS in Systems Science"
                honors="Magna cum Laude"
              />
            </Section>
            <Section title="Selected Publications">
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
          </div>
          <div className="flex flex-col shrink-0 justify-between p-6 pt-0 space-y-4 md:pt-40 print:pt-[21.25565616700221vw] md:pb-8 print:pb-8">
            <Section title="Info">
              <div>/ˈɛrɪk/</div>
              <div>he/him</div>
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
              />
            </Section>
          </div>
        </div>
        <Footing upward />
      </div>
    </div>
  );
}
