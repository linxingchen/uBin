
import * as React from 'react'
import {Menu, MenuDivider, MenuItem} from '@blueprintjs/core'

/**
 * Resetting individual or all active filters
 */

interface IProps {
  revertFilters(): void
  resetAll(): void
  resetGC(): void
  resetCoverage(): void
  resetTaxonomies(): void
  resetBin(): void
  canRevert?: boolean
}

export class ResetMenu extends React.PureComponent<IProps> {

  render(): JSX.Element {
    return (
      <Menu>
        <MenuItem icon='filter-list' text='Reset Filters' disabled={true}/>
        <MenuDivider />
        <MenuItem icon='filter-remove' text='Revert Filters' disabled={!this.props.canRevert} label='ctrl/⌘ + z' onClick={() => this.props.revertFilters()}/>
        <MenuItem icon='filter-remove' text='Reset All Filters' onClick={() => this.props.resetAll()}/>
        <MenuItem icon='filter-remove' text='Reset GC Filter' onClick={() => this.props.resetGC()}/>
        <MenuItem icon='filter-remove' text='Reset Coverage Filter' onClick={() => this.props.resetCoverage()}/>
        <MenuItem icon='filter-remove' text='Reset Taxonomy Filter' onClick={() => this.props.resetTaxonomies()}/>
        <MenuItem icon='filter-remove' text='Reset Bin Filter' onClick={() => this.props.resetBin()}/>
      </Menu>
    )}
  }