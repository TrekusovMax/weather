import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { loadWeatherList, getWeatherLoadingStatus, getWeather } from "./../../../store/weather"
import City from "./city"
import NavButton from "./navButton"
import NavContent from "./navContent"

const WeatherBlock = ({ data }) => {
	const dispatch = useDispatch()
	const isLoading = useSelector(getWeatherLoadingStatus())
	useEffect(() => {
		dispatch(loadWeatherList())
	}, [])

	const weatherList = useSelector(getWeather())
	if (isLoading) return "Loading..."

	const { location, current, forecast } = weatherList

	return (
		<>
			<div className="col-8 w-500">
				<div className="p-3 border bg-light">
					<City city={location.name} date={location.localtime} />
					<NavButton />
					<div className="tab-content" id="nav-tabContent">
						<NavContent current={current} />

						<div
							className="tab-pane fade"
							id="nav-profile"
							role="tabpanel"
							aria-labelledby="nav-profile-tab">
							<div className="row mt-2">
								<div className="col-4">
									<div className="mt-2 d-flex flex-row justify-content-between">
										<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 w-50 text-center">
											+1.2&#8451;
										</h4>
										<img
											src="http://cdn.weatherapi.com/weather/64x64/night/116.png"
											alt="Пасмурно"
										/>
										<p className="align-self-end text-secondary">Переменная облачность</p>
									</div>
									<hr />
									<div className="mt-2 d-flex flex-row justify-content-between">
										<p>По ощущению</p>
										<span>-5&#8451;</span>
									</div>
									<div className="mt-2 d-flex flex-row justify-content-between">
										<p>Ветер</p>
										<span>23.8 км/ч, "З"</span>
									</div>
									<div className="mt-2 d-flex flex-row justify-content-between">
										<p>Давление</p>
										<span>742 мм.рт.ст.</span>
									</div>
									<div className="mt-2 d-flex flex-row justify-content-between">
										<p>Влажность</p>
										<span>80%</span>
									</div>
									<div className="mt-2 d-flex flex-row justify-content-between">
										<p>Облачность</p>
										<span>89%</span>
									</div>
								</div>
								<div className="col-8 border-start">
									<div className="d-flex flex-row justify-content-around">
										<div>
											<span>03</span>
											<sup>00</sup>
										</div>
										<div>
											<span>09</span>
											<sup>00</sup>
										</div>
										<div>
											<span>15</span>
											<sup>00</sup>
										</div>
										<div>
											<span>21</span>
											<sup>00</sup>
										</div>
									</div>
									<div className="d-flex flex-row justify-content-around">
										<div>
											<img
												src="http://cdn.weatherapi.com/weather/64x64/night/122.png"
												alt="Пасмурно"
												srcSet=""
											/>
										</div>
										<div>
											<img
												src="http://cdn.weatherapi.com/weather/64x64/day/266.png"
												alt="Пасмурно"
												srcSet=""
											/>
										</div>
										<div>
											<img
												src="http://cdn.weatherapi.com/weather/64x64/day/335.png"
												alt="Пасмурно"
												srcSet=""
											/>
										</div>
										<div>
											<img
												src="http://cdn.weatherapi.com/weather/64x64/night/122.png"
												alt="Пасмурно"
												srcSet=""
											/>
										</div>
									</div>
									<div className="d-flex flex-row justify-content-around">
										<div>
											<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
												+1.8&#8451;
											</h4>
										</div>
										<div>
											<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
												+2.7&#8451;
											</h4>
										</div>
										<div>
											<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
												+4&#8451;
											</h4>
										</div>
										<div>
											<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
												-0.2&#8451;
											</h4>
										</div>
									</div>
									<h5 className="text-center mt-2">Скорость ветра, м/с</h5>
									<div className="d-flex flex-row justify-content-around">
										<div>
											<h4 className="p-2 text-center">20.2</h4>
										</div>
										<div>
											<h4 className="p-2 text-center">24.8</h4>
										</div>
										<div>
											<h4 className="p-2 text-center">27.7</h4>
										</div>
										<div>
											<h4 className="p-2 text-center">23.8</h4>
										</div>
									</div>

									<div className="d-flex flex-row justify-content-around">
										<div style={{ transform: "rotate(215deg)", color: "blue" }}>
											<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
										</div>
										<div style={{ transform: "rotate(215deg)", color: "blue" }}>
											<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
										</div>
										<div style={{ transform: "rotate(288deg)", color: "blue" }}>
											<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
										</div>
										<div style={{ transform: "rotate(261deg)", color: "blue" }}>
											<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
										</div>
									</div>
									<div className="d-flex justify-content-end mt-3">
										<a href="#" className="align-self-end">
											Посмотреть подробнее
										</a>
									</div>
								</div>
							</div>
						</div>
						<div
							className="tab-pane fade"
							id="nav-contact"
							role="tabpanel"
							aria-labelledby="nav-contact-tab">
							<div className="row mt-2">
								<div className="col">
									<div className="d-flex flex-row justify-content-around">
										<div>
											<span>03</span>
											<sup>00</sup>
										</div>
										<div>
											<span>09</span>
											<sup>00</sup>
										</div>
										<div>
											<span>15</span>
											<sup>00</sup>
										</div>
										<div>
											<span>21</span>
											<sup>00</sup>
										</div>
										<div>
											<span>15</span>
											<sup>00</sup>
										</div>
										<div>
											<span>21</span>
											<sup>00</sup>
										</div>
										<div>
											<span>21</span>
											<sup>00</sup>
										</div>
									</div>
									<div className="d-flex flex-row justify-content-around">
										<div>
											<img
												src="http://cdn.weatherapi.com/weather/64x64/night/122.png"
												alt="Пасмурно"
												srcSet=""
											/>
										</div>
										<div>
											<img
												src="http://cdn.weatherapi.com/weather/64x64/day/266.png"
												alt="Пасмурно"
												srcSet=""
											/>
										</div>
										<div>
											<img
												src="http://cdn.weatherapi.com/weather/64x64/day/335.png"
												alt="Пасмурно"
												srcSet=""
											/>
										</div>
										<div>
											<img
												src="http://cdn.weatherapi.com/weather/64x64/night/122.png"
												alt="Пасмурно"
												srcSet=""
											/>
										</div>
										<div>
											<img
												src="http://cdn.weatherapi.com/weather/64x64/day/335.png"
												alt="Пасмурно"
												srcSet=""
											/>
										</div>
										<div>
											<img
												src="http://cdn.weatherapi.com/weather/64x64/night/122.png"
												alt="Пасмурно"
												srcSet=""
											/>
										</div>
										<div>
											<img
												src="http://cdn.weatherapi.com/weather/64x64/night/122.png"
												alt="Пасмурно"
												srcSet=""
											/>
										</div>
									</div>
									<div className="d-flex flex-row justify-content-around">
										<div>
											<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
												+1.8&#8451;
											</h4>
										</div>
										<div>
											<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
												+2.7&#8451;
											</h4>
										</div>
										<div>
											<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
												+4&#8451;
											</h4>
										</div>
										<div>
											<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
												-0.2&#8451;
											</h4>
										</div>
										<div>
											<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
												-0.2&#8451;
											</h4>
										</div>
										<div>
											<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 text-center">
												-0.2&#8451;
											</h4>
										</div>
									</div>
									<h5 className="text-center mt-2">Скорость ветра, м/с</h5>
									<div className="d-flex flex-row justify-content-around">
										<div>
											<h4 className="p-2 text-center">20.2</h4>
										</div>
										<div>
											<h4 className="p-2 text-center">24.8</h4>
										</div>
										<div>
											<h4 className="p-2 text-center">27.7</h4>
										</div>
										<div>
											<h4 className="p-2 text-center">23.8</h4>
										</div>
										<div>
											<h4 className="p-2 text-center">24.8</h4>
										</div>
										<div>
											<h4 className="p-2 text-center">27.7</h4>
										</div>
										<div>
											<h4 className="p-2 text-center">23.8</h4>
										</div>
									</div>

									<div className="d-flex flex-row justify-content-around">
										<div style={{ transform: "rotate(215deg)", color: "blue" }}>
											<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
										</div>
										<div style={{ transform: "rotate(215deg)", color: "blue" }}>
											<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
										</div>
										<div style={{ transform: "rotate(288deg)", color: "blue" }}>
											<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
										</div>
										<div style={{ transform: "rotate(261deg)", color: "blue" }}>
											<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
										</div>
										<div style={{ transform: "rotate(215deg)", color: "blue" }}>
											<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
										</div>
										<div style={{ transform: "rotate(288deg)", color: "blue" }}>
											<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
										</div>
										<div style={{ transform: "rotate(261deg)", color: "blue" }}>
											<i className="las la-arrow-up" style={{ fontSize: "50px" }}></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

WeatherBlock.propTypes = {
	data: PropTypes.object
}

export default WeatherBlock
