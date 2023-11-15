import {useTranslation} from "~/i18n";
import {DropdownData, Navbar} from "~/components/Navigation/Navbar";

export default async function Header({lng}: { lng: string }) {
    const {t} = await useTranslation(lng, "navbar")

    const data: DropdownData[] = [{
        name: t("conferences"),
        href: "/conferences",
        viewAll: "",
        dropdown: [
            {name: t('conference.2024.name'), description: t('conference.2024.description'), href: '/conference/2024'},
            {name: t('conference.2023.name'), description: t('conference.2023.description'), href: '/conference/2023'}
        ]
    }, {
        name: t("events"),
        href: "/events",
        viewAll: "",
        dropdown: [
            {name: t("event.liftoff"), description: '', href: '/event/liftoff'}
        ]
    }]

    return (
        <Navbar data={data} lng={lng}/>
    )
}
