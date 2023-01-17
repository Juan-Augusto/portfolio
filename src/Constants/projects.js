import { DSMModal } from "../Components/Modals/projects/DSM"
import { SGOModal } from "../Components/Modals/projects/SGOWebApp"
import { StatusModal } from "../Components/Modals/projects/statusWebApp"
import { MeuBotModal } from "../Components/Modals/projects/MeuBotModal"

export const projects = [
    {
        title: "Status Web App",
        description: "A web application made entirely with ReactJS for the frontend and Java Spring Boot for the backend, which is a platform made for police forces management.",
        image: "https://i.imgur.com/0Z4Z0Zu.png",
        metaTitle: "Status Web App",
        altTag: "Status Web App",
        contentModal: <StatusModal />
    },
    {
        title: "SGO Web App",
        description: "A web application that used ReactJS for the frontend and Java Spring Boot for the backend.",
        image: "https://i.imgur.com/0Z4Z0Zu.png",
        metaTitle: "SGO Web App",
        altTag: "SGO Web App",
        contentModal: <SGOModal />
    },
    {
        title: "Meu Bot",
        description: "A web application that used ReactJS for the frontend and NodeJS for the backend.",
        image: "https://i.imgur.com/0Z4Z0Zu.png",
        metaTitle: "Meu Bot",
        altTag: "Meu Bot",
        contentModal: <MeuBotModal />
    },
    {
        title: "DSM",
        description: "A web application that used ReactJS for the frontend and NodeJS for the backend.",
        image: "https://i.imgur.com/0Z4Z0Zu.png",
        metaTitle: "DSM",
        altTag: "DSM",
        contentModal: <DSMModal />
    }
]