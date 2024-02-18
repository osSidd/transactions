import * as d3 from 'd3'
import { useEffect, useRef } from 'react'

export default function BarChart(){
    const svgRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        makeChart(svgRef)
    }, [])

    function makeChart(svgRef: React.RefObject<SVGSVGElement>){

        const width = 500
        const height = 500

        const svg = d3.select(svgRef.current).attr('width', width).attr('height', height)

        const xScale = d3.scaleBand().domain(['a', 'b']).range([0, width])
        const yScale = d3.scaleLinear().domain([0, 60]).range([0, height])

        const bottomAxis = d3.axisBottom(xScale)
        svg?.append('g').call(bottomAxis)

        const leftAxis = d3.axisLeft(yScale)
        svg?.append('g').call(leftAxis)
        
    }

    return (
        <svg ref={svgRef}></svg>
    )
}