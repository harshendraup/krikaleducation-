
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';


// Section general blocks
// Spacing util
// Section scss
import looking from '../../../styles/scss/sections/index/looking.module.scss';
import section from '../../../styles/scss/blocks/section.title.module.scss'

export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>We are currently providing Jobs.</h4>
				<h2 className={looking.json}>Jobs : &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Full Stack Developer</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Software Engineer</span></h2>
				<h2 className={looking.json}>&#125;</h2>
				<h4>We are currently looking for the interns or trainees, so can We get them ready for the future Jobs</h4>
			</Container>
		</Section>
	)
}