'use client'

import React from "react";
import {Card, Text, Timeline, Title} from "@mantine/core";
import {useTranslation} from "src/i18n";


export const History = async ({lng}: { lng: string }) => {
    const {t} = await useTranslation(lng, "common")

    return (
        <Card my={"xl"}>
            <Title order={2} m={"xl"}>
                {t('history')}
            </Title>
            <Timeline active={9} reverseActive bulletSize={24} lineWidth={2} color={"blue"} m={"xl"}>
                <Timeline.Item title={t('timeline.4th_conference.title')} lineVariant={"dashed"}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.4th_conference.text')}
                    </Text>
                    <Text size="xs" mt={4}>2025</Text>
                </Timeline.Item>

                <Timeline.Item title={t('timeline.3rd_conference.title')}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.3rd_conference.text')}
                    </Text>
                    <Text size="xs" mt={4}>2024</Text>
                </Timeline.Item>

                <Timeline.Item title={t('timeline.2nd_conference.title')}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.2nd_conference.text')}
                    </Text>
                    <Text size="xs" mt={4}>18.-21. May 2023</Text>
                </Timeline.Item>

                <Timeline.Item title={t('timeline.join_erig_sta_bears.title')}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.join_erig_sta_bears.text')}
                    </Text>
                    <Text size="xs" mt={4}>18. May 2023</Text>
                </Timeline.Item>

                <Timeline.Item title={t('timeline.1st_conference.title')}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.1st_conference.text')}
                    </Text>
                    <Text size="xs" mt={4}>16.-19. Jun. 2022</Text>
                </Timeline.Item>

                <Timeline.Item title={t('timeline.founding.title')}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.founding.text')}
                    </Text>
                    <Text size="xs" mt={4}>19. Dec. 2021</Text>
                </Timeline.Item>

                <Timeline.Item title={t('timeline.decision_founding.title')}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.decision_founding.text')}
                    </Text>
                    <Text size="xs" mt={4}>2021</Text>
                </Timeline.Item>

                <Timeline.Item title={t('timeline.start_constitution.title')}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.start_constitution.text')}
                    </Text>
                    <Text size="xs" mt={4}>2020</Text>
                </Timeline.Item>

                <Timeline.Item title={t('timeline.deepen_cooperation.title')}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.deepen_cooperation.text')}
                    </Text>
                    <Text size="xs" mt={4}>2019</Text>
                </Timeline.Item>

                <Timeline.Item title={t('timeline.core_ideas.title')}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.core_ideas.text')}
                    </Text>
                    <Text size="xs" mt={4}>2019</Text>
                </Timeline.Item>

                <Timeline.Item title={t('timeline.interested_groups.title')}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.interested_groups.text')}
                    </Text>
                    <Text size="xs" mt={4}>2019</Text>
                </Timeline.Item>

                <Timeline.Item title={t('timeline.first_talks.title')}>
                    <Text color="dimmed" size="sm">
                        {t('timeline.first_talks.text')}
                    </Text>
                    <Text size="xs" mt={4}>2018</Text>
                </Timeline.Item>
            </Timeline>
        </Card>
    )
}