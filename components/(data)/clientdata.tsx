"use client"

import React, {useEffect, useState} from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Row,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
fetchClientsData
import { fetchClientsData } from "./clientfunctions"
import { deleteClient } from "./clientfunctions"
import { modifyClient } from "./clientfunctions"
import CRMNavBar from "@/app/(allroutes)/crmpages/crmpage/crmnavbar"


export type Client = {
  id: string
  company: string
  contact: string
  mobile: string
  phone: string
  followup: string
  address: string
  servicefee: string
  contractdoc: string
  status: "pending" | "processing" | "success" | "failed"
  email: string
}








  
  // Define your component
  export function ClientData() {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [message, setMessage] = useState<string>('');
    const [clients, setClients] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [clientFetched, setClientFetched] = useState<boolean>(false);
    const [editedData, setEditedData] = useState<null | any>(null);
    const [data, setData] = React.useState<Client[]>([]);



    const handleModifyClick = (client: Client) => {
      // Set the found client as the edited data
      setEditedData({ ...client });
      // Set editing state to true
      setIsEditing(true);
    };
    

// Function to handle onChange event in input fields
// const handleInputChange = (e:any, key: keyof Client, value: string) => {
//   // Update the edited data with the new value
//   if (editedData) {
//     setEditedData(e.target.value);
// };




    const columns: ColumnDef<Client>[] = [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: "id",
        header: () => <div className="text-right">ID</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("id")}</div>,
      },
      {
        accessorKey: company,
        header: () => <div className="text-right">Company</div>,
        cell: ({ row }) => {
          const cellData: any = row.original;
          return isEditing ? (
            <Input
              value={cellData}
              onChange={(event) => setEditedData(event.target.value)}
            />
          ) : (
            <div className="lowercase">{cellData}</div>
          );
        },
      },
      
      {
        accessorKey: "contact",
        header: () => <div className="text-right">Contact</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("contact")}</div>,
      },
      
      {
        accessorKey: "email",
        id: "emailCol",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Email
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
      },
      {
        accessorKey: "mobile",
        header: () => <div className="text-right">Mobile</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("mobile")}</div>,
      },
      {
        accessorKey: "phone",
        header: () => <div className="text-right">Phone</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("phone")}</div>,
      },
      {
        accessorKey: "followup",
        header: () => <div className="text-right">Follow up</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("followup")}</div>,
      },
      {
        accessorKey: "address",
        header: () => <div className="text-right">Address</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("address")}</div>,
      },
      {
        accessorKey: "servicefee",
        header: () => <div className="text-right">Service Fee</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("servicefee")}</div>,
      },
      {
        accessorKey: "contractdoc",
        header: () => <div className="text-right">Contract Doc</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("contractdoc")}</div>,
      },

      {
        id: "actions",
        enableHiding: false,
        cell: ({ row } : { row: Row<Client> }) => {
          const client = row.original;
    
    
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                {/* Modify */}
                
          <DropdownMenuItem onClick={() => setIsEditing(true)}>
            Modify
          </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem 
                onClick={(async () => await deleteClient(client.id))}
                >Delete</DropdownMenuItem>
                <DropdownMenuItem>Email</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      }
      
    ]
    
 
    
    const fetchData = async (): Promise<Client[]>=>{
        
        // Get clients Handler
           const response = await fetchClientsData(clientFetched)
           console.log(response)
           const clientData = response.data
           if (clientData && clientData.length > 0){
            setData(clientData)
            setClients(clientData)
            setClientFetched(true)
          }else{
            setMessage(response.message)
          }
           return response
          }
  
    // Fetch the data outside the component
    
    useEffect(() => {
      fetchData()

      }, []);

    
    
  
    // Use the fetched data with useReactTable
    const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    });
  
    

  return (
    <div className="w-full">
    <div className="pt-4">
    <CRMNavBar />
    </div>
   {/* Heading */}
    <div>
   <p className="text-center bg-clip-text text-2xl py-4 font-extrabold">
     BUSINESS DEVELOPMENT PAGE</p>
   <div className="text-center bg-clip-text text-xl py-1 font-extrabold">
    {clients && clients.length > 0 ? 
    <p>Total Clients:
    {clients.length}</p>
    :null
    }</div>
    </div>

      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-start"
                >
                  {message}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
