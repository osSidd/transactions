import * as d3 from 'd3'
import { useEffect, useRef } from 'react'
import { PriceRange } from '../types'

export default function BarChart({priceRange}: {priceRange: PriceRange[]}){
    const svgRef = useRef<SVGSVGElement>(null)

    useEffect(() => {
        makeChart(svgRef)
    }, [priceRange])

    function makeChart(svgRef: React.RefObject<SVGSVGElement>){

        const width = 700
        const height = 300
        const vPadding = 25
        const hPadding = 25

        const svg = d3.select(svgRef.current).attr('width', width).attr('height', height)
        svg.select('*').remove()

        const xScale = d3.scaleBand().domain(priceRange.map(item => item.range)).range([hPadding, width])
        const yScale = d3.scaleLinear().domain([60, 0]).range([vPadding, height - vPadding])

        const bottomAxis = d3.axisBottom(xScale)
        svg?.append('g').call(bottomAxis).attr('transform', `translate(0, ${height - vPadding})`)

        const leftAxis = d3.axisLeft(yScale).ticks(5)
        svg?.append('g').call(leftAxis).attr('transform', `translate(${hPadding}, 0)`)

        const barContainer = svg.append('g')
        barContainer.selectAll('rect')
                    .data(priceRange)
                    .enter()
                    .append('rect')
                    .attr('height', d => yScale(d.total))
                    .attr('width', 30)
                    .attr('x', d => xScale(d.range)! + xScale.bandwidth()/4)
                    .attr('y', d => height - yScale(d.total) - vPadding)
                    .attr('fill', 'teal')
    }

    return (
        <svg ref={svgRef}></svg>
    )
}