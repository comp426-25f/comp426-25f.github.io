import ShowcaseListing, { type ShowcaseListing as ShowcaseListingType } from "./showcase-listing";

export default function ShowcaseList() {

    const showcaseListings: ShowcaseListingType[] = [
        {title: "Home Plate", url: "https://homeplateapp.vercel.app",  github: "https://github.com/comp426-25f/final-project-team-01/blob/main/README.md"},
        {title: "Cook Me Up", url: "https://final-project-team-2-1.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-2-1/blob/main/README.md"},
        {title: "TRU", url: "https://tru-dat.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-03/blob/main/README.md"},
        {title: "Quiz Royale", url: "final-project-team-04-the-best-team.vercel.app",  github: "https://github.com/comp426-25f/final-project-team-04-the-best-team/blob/main/README.md"},
        {title: "LISTO.", url: "final-project-team-5-nu.vercel.app",  github: "https://github.com/comp426-25f/final-project-team-5/blob/main/README.md"},
        {title: "Echo", url: "https://echo-team-06.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-6/blob/main/README.md"},
        {title: "MealMatch", url: "https://mealmatch-site.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-8/blob/main/README.md"},
        {title: "Muncher", url: "https://muncher.vercel.app/login",  github: "https://github.com/comp426-25f/final-project-team-09/blob/main/README.md"},
        {title: "LeetBuddy", url: "https://leetbuddy-lyart.vercel.app",  github: "https://github.com/comp426-25f/final-project-team-10-unsell-programming-language/blob/db4e1d7cff27292b601713f8b5aaf8ab0f5b6fa7/README.md"},
        {title: "CollabBoard", url: "unccollabboard.vercel.app",  github: "https://github.com/comp426-25f/final-project-team-11/blob/main/README.md"},
        {title: "Fitmax", url: "https://final-project-team-12.vercel.app",  github: " https://github.com/psap2/FitMaxx-/blob/dev/README.md"},
        {title: "Curator's Closet", url: "React Native project (demo sent to Ajay)",  github: "https://github.com/comp426-25f/final-project-team-12/blob/main/README.md"},
        {title: "HomePlate", url: "https://homeplate-426-final.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-13/blob/ac759e58702bc9bf4aa92c91f6b473f38bf9be37/README.md"},
        {title: "TripShare", url: "https://tripshare-14-ofaf.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-14/blob/main/README.md"},
        {title: "MealMate", url: "https://final-project-team-15-zeta.vercel.app",  github: "https://github.com/comp426-25f/final-project-team-15/blob/main/README.md"},
        {title: "Trace", url: "https://final-project-team-16-iota.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-16/blob/main/README.md"},
        {title: "Commune", url: "https://final-project-team-17-tau.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-17/blob/main/README.md"},
        {title: "CookFlow", url: "https://final-project-team-18.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-18/blob/main/README.md"},
        {title: "Courser", url: "https://courserunc.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-19/edit/main/README.md"},
        {title: "PearPredict", url: "https://pearpredict.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-20/blob/main/README.md"},
        {title: "TarHeel Tracker ", url: "https://final-project-team-21-68td.vercel.app/login",  github: "https://github.com/comp426-25f/final-project-team-21"},
        {title: "Walkers", url: "https://final-project-team-22-txev.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-22/blob/main/README.md"},
        {title: "Wandr", url: "https://final-project-team-23-ebon.vercel.app/login",  github: "https://github.com/comp426-25f/final-project-team-23/blob/main/README.md"},
        {title: "Campusbay", url: "https://campusbay-426.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-24/blob/main/README.md"},
        {title: "RamsHub", url: "https://ramshub.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-25/blob/main/README.md"},
        {title: "FreeBet", url: "https://final-project-team-26-freebet.vercel.app",  github: "https://github.com/comp426-25f/final-project-team-26-freebet/blob/main/README.md"},
        {title: "moCHa", url: "https://mocha-ch.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-27/blob/main/README.md"},
        {title: "Fortune Feed", url: "https://fortunefeed.vercel.app/login",  github: "https://github.com/comp426-25f/final-project-team-28/blob/main/README.md"},
        {title: "Audrey's Arrangements", url: "https://audreysarrangements.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-29/blob/main/README.md"},
        {title: "Bread Budgeting", url: "https://final-project-team-30-chi.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-30/blob/main/README.md"},
        {title: "Eat With Me", url: "https://eatwithmeunc.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-31/blob/main/README.md"},
        {title: "Food Flash", url: "https://final-project-team-32.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-32/blob/main/README.md"},
        {title: "Health Tracker", url: "https://team33-healthtracker.vercel.app",  github: "https://github.com/comp426-25f/final-project-team-33?tab=readme-ov-file"},
        {title: "SyncNotes", url: "https://sync-notes-426.vercel.app",  github: "https://github.com/comp426-25f/final-project-team-34/blob/main/README.md"},
        {title: "Events Creation and Management", url: "https://final-project-team-35-ylsq.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-35/blob/main/README.md"},
        {title: "MoodMate", url: "https://final-project-team-36.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-36/blob/main/README.md"},
        {title: "Swiped", url: "https://swipedunc.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-37/blob/8817617a21b9099fee37931d40a1be8b90d9d558/README.md"},
        {title: "Bookish", url: "https://final-project-team-38-bow2.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-38/blob/b3fcbb15e35ac2f6d20c11d901e8ec12ce23f94f/README.md"},
        {title: "UNC MarketPlace", url: "https://final-project-team-39-mu.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-39/blob/main/README.md"},
        {title: "StudySync", url: "https://study-sync-seven-phi.vercel.app/login",  github: "https://github.com/comp426-25f/final-project-team-40"},
        {title: "BiteBook", url: "https://final-project-41-omega.vercel.app/",  github: "https://github.com/comp426-25f/final-project-41/blob/f9f6a342adf05427388ed021d773f92b106a4187/README.md"},
        {title: "StudyBuddy", url: "https://final-project-team-42.vercel.app",  github: "https://github.com/comp426-25f/final-project-team-42/blob/main/README.md"},
        {title: "Pickpal", url: "https://pickpal-team43.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-43/blob/main/README.md"},
        {title: "BestReads", url: "https://bestreadsbooks.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-44/blob/main/README.md"},
        {title: "NoteLab", url: "https://final-project-team-45.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-45/blob/main/README.md"},
        {title: "UNC L&F", url: "https://unc-lost-and-found.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-46/blob/main/README.md"},
        {title: "Heel Map", url: "https://final-project-team-47-five.vercel.app/login",  github: "https://github.com/comp426-25f/final-project-team-47/blob/main/README.md"},
        {title: "GymTrack", url: "https://final-project-team-48.vercel.app/",  github: "https://github.com/comp426-25f/final-project-team-48/blob/main/README.md"},
        {title: "Atlas", url: "atlas-murex.vercel.app",  github: "https://github.com/comp426-25f/final-project-team-49/blob/main/README.md"},
    ]

    return <div className="flex flex-col mt-6">
        {showcaseListings.map((listing, index) => (
            <ShowcaseListing key={listing.title} {...listing} teamNumber={index + 1} />
        ))}

    </div>
}