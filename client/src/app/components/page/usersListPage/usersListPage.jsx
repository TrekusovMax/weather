import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { paginate } from "../../../utils/paginate"
import Pagination from "../../common/pagination"

import UserTable from "../../ui/usersTable"
import _ from "lodash"
import { useSelector } from "react-redux"

import { getCurrentUserId, getUsersList } from "../../../store/users"

const UsersListPage = () => {
	const users = useSelector(getUsersList())
	const currentUserId = useSelector(getCurrentUserId())

	const [currentPage, setCurrentPage] = useState(1)
	const [searchQuery, setSearchQuery] = useState("")
	const [selectedProf, setSelectedProf] = useState()
	const [sortBy, setSortBy] = useState({ path: "name", order: "asc" })
	const pageSize = 8

	const handleDelete = (userId) => {
		// setUsers(users.filter((user) => user._id !== userId));
		console.log(userId)
	}
	const handleToggleBookMark = (id) => {
		const newArray = users.map((user) => {
			if (user._id === id) {
				return { ...user, bookmark: !user.bookmark }
			}
			return user
		})
		// setUsers(newArray);
		console.log(newArray)
	}

	useEffect(() => {
		setCurrentPage(1)
	}, [selectedProf, searchQuery])

	const handleSearchQuery = ({ target }) => {
		setSelectedProf(undefined)
		setSearchQuery(target.value)
	}

	const handlePageChange = (pageIndex) => {
		setCurrentPage(pageIndex)
	}
	const handleSort = (item) => {
		setSortBy(item)
	}

	if (users) {
		return (
			<div className="d-flex">
				<div className="d-flex flex-column">
					{/* <input
						type="text"
						name="searchQuery"
						placeholder="Search..."
						onChange={handleSearchQuery}
						value={searchQuery}
					/>
					{count > 0 && (
						<UserTable
							users={usersCrop}
							onSort={handleSort}
							selectedSort={sortBy}
							onDelete={handleDelete}
							onToggleBookMark={handleToggleBookMark}
						/>
					)}
					<div className="d-flex justify-content-center">
						<Pagination
							itemsCount={count}
							pageSize={pageSize}
							currentPage={currentPage}
							onPageChange={handlePageChange}
						/>
					</div> */}
				</div>
			</div>
		)
	}
	return "Loading..."
}
UsersListPage.propTypes = {
	users: PropTypes.array
}

export default UsersListPage
