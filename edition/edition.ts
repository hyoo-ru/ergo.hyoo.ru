namespace $ {

	export class $hyoo_ergo_edition_service extends $mol_object2 {

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem_key
		item(id: string) {
			const obj = new this.$.$hyoo_ergo_edition
			obj.id = $mol_const(id)
			obj.domain = $mol_const(this.domain())
			return obj
		}

		@ $mol_action
		create(text: string, title: string) {
			const edition = this.item( $mol_guid() )
			edition.text(text)
			edition.title(title)
			return edition
		}

		@ $mol_action
		link(parent: $hyoo_ergo_edition, children: $hyoo_ergo_edition) {
			parent.children( [...parent.children(), children] )
			children.parents( [...children.parents(), parent] )
		}

	}
	export class $hyoo_ergo_edition extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'hyoo_ergo_edition' ).doc( this.id() )
		}

		title(next?: string) {
			return this.state().sub('title').text(next)
		}

		text(next?: string) {
			return this.state().sub('text').text(next)
		}

		parents(next?: $hyoo_ergo_edition[]) {
			const ids = this.state().sub('parents').list( next && next.map(obj => obj.id()) )
			return ids.map( id => this.domain().edition().item( String(id) ) )
		}

		children(next?: $hyoo_ergo_edition[]) {
			const ids = this.state().sub('children').list( next && next.map(obj => obj.id()) )
			return ids.map( id => this.domain().edition().item( String(id) ) )
		}

		proposal(next?: $hyoo_ergo_proposal) {
			const id = this.state().sub('proposal').value(next && next.id())
			return id ? this.domain().proposal(String(id)) : null
		}

		creator(next?: $hyoo_ergo_person) {
			const id = this.state().sub('creator').value(next && next.id())
			if(!id) throw new Error('Creator is required')
			return this.domain().person( String(id) )
		}

		moment(next?: $mol_time_moment) {
			const str = this.state().sub('moment').value(next && next.toString())
			if (!str) throw new Error('Moment is required')
			return new $mol_time_moment( String(str) )
		}

		@ $mol_action
		child_add(proposal: $hyoo_ergo_proposal) {
			const child = this.domain().edition().item( $mol_guid() )
			proposal.edition(child)

			child.moment(new $mol_time_moment)
			child.creator(this.domain().user())
			child.proposal(proposal)

			this.domain().edition().link(this, child)

			return child
		}
	}
}
