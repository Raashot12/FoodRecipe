/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import {List, Flex, Button} from "@mantine/core"
import React, {FC, useEffect} from "react"
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md"

interface IPaginationProps {
  idToClampTo?: string
  data?: any[]
  pagination: any[]
  // eslint-disable-next-line no-unused-vars
  prevPage: (e: any) => void
  // eslint-disable-next-line no-unused-vars
  nextPage: (e: any) => void
  // eslint-disable-next-line no-unused-vars
  changePage: (page: number, e?: any) => void
}

// the id is used when the page is changed it scrolls back to the top of that section in the parent
const Pagination: FC<IPaginationProps> = ({
  data,
  pagination,
  prevPage,
  nextPage,
  changePage,
}) => {
  // when data changes navigate to page 1
  useEffect(() => {
    changePage(1)
  }, [data])

  return (
    <Flex justify={"center"} align="center" columnGap={20} mb={20}>
      {/* left arrow button */}
      <Flex
        display={pagination.length === 0 ? "none" : "flex"}
        onClick={(e: any) => {
          prevPage(e)
          // const pathAndSlug = router.asPath.split("#")[0]
          // const newPath = `${pathAndSlug}#${idToClampTo}`
          // // eslint-disable-next-line no-unused-expressions
          // idToClampTo ? window.location.replace(newPath) : ""
        }}
        // check if on first page
        bg={
          // pagination[0]?.current === true ? "rgba(255, 86, 4, 0.5)" : "#E25D24"
          pagination[0]?.current === true ? "gray" : "green"
        }
        sx={{
          padding: "12px",
          borderRadius: "10px",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "none",
          },
          ":active": {
            backgroundColor: "none",
          },
          ".mantine-Button-label": {
            fontSize: 14,
          },
          "&.mantine-Button-root": {
            height: 36,
            paddingLeft: 14,
            paddingRight: 14,
          },
        }}
      >
        <MdKeyboardArrowLeft color="green" />
      </Flex>

      <List
        display="flex"
        sx={{columnGap: 12, alignItems: "center", justifyContent: "center"}}
      >
        {pagination.map(page => {
          if (!page.ellipsis) {
            return (
              <React.Fragment key={page.id}>
                {/* main numbers */}
                <Button
                  onClick={(e: any) => {
                    changePage(page.id, e)
                    // eslint-disable-next-line no-unused-expressions
                    // const pathAndSlug = router.asPath.split("#")[0]
                    // const newPath = `${pathAndSlug}#${idToClampTo}`
                    // // eslint-disable-next-line no-unused-expressions
                    // idToClampTo ? window.location.replace(newPath) : ""
                  }}
                  fz={14}
                  bg={page.current ? "green" : "transparent"}
                  sx={{
                    ":hover": {
                      backgroundColor: page.current ? "green" : "",
                    },
                    ":active": {
                      backgroundColor: "green",
                      transform: "scale(0.95)",
                    },
                    borderColor: "green",
                    ".mantine-Button-label": {
                      fontSize: 14,
                    },
                    "&.mantine-Button-root": {
                      color: page.current ? "#051438" : "#051438",

                      height: 36,
                      "&:hover": {
                        background: "green",
                        color: "white",
                        border: "none",
                      },
                    },
                  }}
                  fw={400}
                >
                  {page.id}
                </Button>
              </React.Fragment>
            )
          }
          return (
            <List.Item
              key={page.id}
              sx={{
                listStyleType: "none",
                "&:hover": {
                  background: "none !important",
                },
              }}
            >
              {/* Ellipsis */}
              <Button
                bg="transparent"
                fw={400}
                sx={{
                  borderColor: "green",
                  ".mantine-Button-label": {
                    fontSize: 14,
                  },
                  "&.mantine-Button-root": {
                    height: 36,
                    color: "#051438",
                    "&:hover": {
                      background: "none !important",
                    },
                  },
                }}
              >
                &hellip;
              </Button>
            </List.Item>
          )
        })}
      </List>

      {/* right arrow button */}
      <Flex
        display={pagination.length === 0 ? "none" : "flex"}
        onClick={(e: any) => {
          nextPage(e)
        }}
        // check if on last page
        bg={
          pagination[pagination.length - 1]?.current === true ? "gray" : "green"
        }
        sx={{
          padding: "12px",
          borderRadius: "10px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "none",
          },
          ":active": {
            backgroundColor: "none",
          },
          ".mantine-Button-label": {
            fontSize: 14,
          },
          "&.mantine-Button-root": {
            height: 36,
            paddingLeft: 14,
            paddingRight: 14,
          },
        }}
      >
        <MdKeyboardArrowRight color="green" />
      </Flex>
    </Flex>
  )
}

export default Pagination
