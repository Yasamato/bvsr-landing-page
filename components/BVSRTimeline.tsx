import { useTranslation } from "../app/i18n/i18n";
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

export default async function BVSRTimeline({ lng }: { lng: string }) {
  const { t } = await useTranslation(lng, "history");

  return (
    <div className="container flex flex-col gap-2 px-4">
      <h2 className="text-2xl">{t("history")}</h2>

      <Timeline>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2026</TimelineTime>
            <TimelineTitle>{t("timeline.5th_conference.title")}</TimelineTitle>
            <TimelineBody>{t("timeline.5th_conference.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2025</TimelineTime>
            <TimelineTitle>{t("timeline.4th_conference.title")}</TimelineTitle>
            <TimelineBody>{t("timeline.4th_conference.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>16.-19. May 2024</TimelineTime>
            <TimelineTitle>{t("timeline.3rd_conference.title")}</TimelineTitle>
            <TimelineBody>{t("timeline.3rd_conference.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>16. May 2024</TimelineTime>
            <TimelineTitle>{t("timeline.join_aux_moon.title")}</TimelineTitle>
            <TimelineBody>{t("timeline.join_aux_moon.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>18.-21. May 2023</TimelineTime>
            <TimelineTitle>{t("timeline.2nd_conference.title")}</TimelineTitle>
            <TimelineBody>{t("timeline.2nd_conference.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>18. May 2023</TimelineTime>
            <TimelineTitle>
              {t("timeline.join_erig_sta_bears.title")}
            </TimelineTitle>
            <TimelineBody>
              {t("timeline.join_erig_sta_bears.text")}
            </TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>16.-19. Jun. 2022</TimelineTime>
            <TimelineTitle>{t("timeline.1st_conference.title")}</TimelineTitle>
            <TimelineBody>{t("timeline.1st_conference.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>19. Dec. 2021</TimelineTime>
            <TimelineTitle>{t("timeline.founding.title")}</TimelineTitle>
            <TimelineBody>{t("timeline.founding.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2021</TimelineTime>
            <TimelineTitle>
              {t("timeline.decision_founding.title")}
            </TimelineTitle>
            <TimelineBody>{t("timeline.decision_founding.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2020</TimelineTime>
            <TimelineTitle>
              {t("timeline.start_constitution.title")}
            </TimelineTitle>
            <TimelineBody>{t("timeline.start_constitution.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2019</TimelineTime>
            <TimelineTitle>
              {t("timeline.deepen_cooperation.title")}
            </TimelineTitle>
            <TimelineBody>{t("timeline.deepen_cooperation.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2019</TimelineTime>
            <TimelineTitle>{t("timeline.core_ideas.title")}</TimelineTitle>
            <TimelineBody>{t("timeline.core_ideas.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2019</TimelineTime>
            <TimelineTitle>
              {t("timeline.interested_groups.title")}
            </TimelineTitle>
            <TimelineBody>{t("timeline.interested_groups.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2019</TimelineTime>
            <TimelineTitle>{t("timeline.first_talks.title")}</TimelineTitle>
            <TimelineBody>{t("timeline.first_talks.text")}</TimelineBody>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
