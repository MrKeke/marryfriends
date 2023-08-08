export default function Location() {
    return (
        <div className="flex flex-col items-center pt-20 pb-16 md:pb-96 text-[#5063a9]">
            <div className="text-3xl font-semibold">ЛОКАЦИЯ</div>
            <div className="text-center">Свадебное торжество пройдет</div>
            <div className="text-center">в отеле Грасс Парк.</div>
            <div className="text-center">Мы подготовили для вас карту, чтобы</div>
            <div className="text-center">вы точно добрались и порадовали нас своим присутствием</div>
            <div className="border-2 border-opacity-100 m-4 md:m-10 lg:m-20 w-full max-w-screen-lg h-[300px] md:h-[200px] lg:h-[400px] xl:h-[600px]">
                <iframe
                    title="Map"
                    src="https://yandex.ru/map-widget/v1/?ll=37.452964%2C56.658662&mode=search&oid=1390118978&ol=biz&z=17.98"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    style={{ border: 'none' }}
                ></iframe>
            </div>
        </div>
    );
}
