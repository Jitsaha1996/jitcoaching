import { Box, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export const Achievments = (props: any) => {
    const { achievments,totalAchivementData,setTotalAchivementData } = props;

    // const [totalAchivementData, setTotalAchivementData] = useState<any[]>([]);
    const [data, setData] = useState<any>({
        ClassType: "",
        totalMarks: "",
        marks: ""
    })
    // const [Payload, setPayload] = useState<any[]>([]);

    useEffect(() => {
        if(achievments?.length)
        setTotalAchivementData([...totalAchivementData, achievments]);
    
    }, []);

    const addDeatils = (index: number) => {
        setTotalAchivementData((prev: any[]) => prev[index] = data)
        const details = {
            ClassType: "",
            totalMarks: "",
            marks: ""
        }
        setTotalAchivementData([...totalAchivementData, details])
        console.log("check", totalAchivementData);
    }
    // const onChangeClassType = (val: string, i: number) => {
    //     console.log("i", i);
    //     const temp = [];
    //     const setData = {
    //         ClassType: val,
    //         totalMarks: totalAchivementData[i].totalMarks,
    //         marks: totalAchivementData[i].marks

    //     };
    //     temp.push(setData);
    //     payLoad.push(temp);
    //     // const setData={...totalAchivementData[i],ClassType:val}
    //     // setPayload([...Payload,setData]);
    //     console.log("check", payLoad);

    // }
    const removeDeatils=(index:number)=>{
        const modifyArray=totalAchivementData.filter((item:any)=>item!=totalAchivementData[index]);
        setTotalAchivementData(modifyArray);
    }
    return (
        <>
            <Box className="flex flex-col my-5">
                {/* <Box className="flex justify-center w-1/5  " sx={{ "backgroundColor": "#1976D2", "color": "white", "borderRadius": "50%" }}>
                    <AddIcon onClick={() => addDeatils()} />
                </Box> */}
                {totalAchivementData?.map((item: any, index: number) => {
                    return (
                        <Box className="flex w-full " key={index}>
                            <Box sx={{ "width": "auto" }} className="mx-2">

                                <TextField id="email" variant="standard" defaultValue={item?.ClassType} required onChange={(e) => setData({ ...data, ClassType: e.target.value })} placeholder='ClassType' />
                            </Box>
                            <Box sx={{ "width": "auto" }} className="mx-2">

                                <TextField id="email" variant="standard" required defaultValue={item?.marks} onChange={(e) => setData({ ...data, totalMarks: e.target.value })} placeholder='Total ' />
                            </Box>
                            <Box sx={{ "width": "auto" }} className="mx-2">

                                <TextField id="email" variant="standard" required defaultValue={item?.totalMarks} onChange={(e) => setData({ ...data, marks: e.target.value })} placeholder='Marks' />
                            </Box>
                            <Box sx={{ "backgroundColor": "#1976D2", "color": "white", "borderRadius": "50%", "width": "auto" }}>
                                <AddIcon onClick={() => addDeatils(index)} />
                            </Box>

                            <Box sx={{ "width": "auto" }} className="mx-2">
                                <DeleteOutlineIcon onClick={() => removeDeatils(index)} />
                            </Box>

                        </Box>
                    )
                }

                )}

                <Box>
                    {/* {JSON.stringify(achievments)} */}
                </Box>
            </Box>

        </>
    )
}
