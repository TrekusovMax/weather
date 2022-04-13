import React from "react"
import PropTypes from "prop-types"

const LeftBlock = () => {
	return (
		<div className="col-8 w-500">
			<div className="p-3 border bg-light">
				<div className="d-flex flex-row align-items-center text-yellow">
					<h2 className="mb-3">
						Москва
						<img
							src="https://img.icons8.com/color/48/000000/star--v1.png"
							height="30px"
							width="30px"
							data-toggle="tooltip"
							data-placement="right"
							title="Добавить в избранное"
							style={{ cursor: "pointer" }}
						/>
					</h2>
				</div>
				<p>Сб, 26 марта, 20:40</p>

				<nav>
					<div className="nav nav-tabs flex-row justify-content-evenly" id="nav-tab" role="tablist">
						<button
							className="nav-link active"
							id="nav-home-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-home"
							type="button"
							role="tab"
							aria-controls="nav-home"
							aria-selected="true">
							Сегодня
						</button>
						<button
							className="nav-link"
							id="nav-profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-profile"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false">
							Завтра
						</button>
						<button
							className="nav-link"
							id="nav-contact-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-contact"
							type="button"
							role="tab"
							aria-controls="nav-contact"
							aria-selected="false">
							Неделя
						</button>
					</div>
				</nav>
				<div className="tab-content" id="nav-tabContent">
					<div
						className="tab-pane fade show active"
						id="nav-home"
						role="tabpanel"
						aria-labelledby="nav-home-tab">
						<div className="row mt-2">
							<div className="col-4">
								<div className="mt-2 d-flex flex-row justify-content-between">
									<h4 className="bg-primary rounded p-2 text-dark bg-opacity-10 w-50 text-center">
										+1.2&#8451;
									</h4>
									<img src="http://cdn.weatherapi.com/weather/64x64/night/116.png" alt="Пасмурно" />
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
									<a href="more.html" className="align-self-end">
										Посмотреть подробнее
									</a>
								</div>
							</div>
						</div>
					</div>
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
									<img src="http://cdn.weatherapi.com/weather/64x64/night/116.png" alt="Пасмурно" />
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
	)
}
/* LeftBlock.propTypes = {
    data: PropTypes.array
}; */

export default LeftBlock
